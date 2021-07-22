<!DOCTYPE html>
<html>

    <head>
        <title>Estrilion</title>
        <meta charset="utf8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/estrilion.css">
        <link rel="stylesheet" href="css/estrilionBoutique.css">
        <link rel="stylesheet" href="css/bootstrap-grip.css">
		<link rel="icon" href="pics/iconmp.ico">
    </head>

    <body>
        <?php include("public/entete.php"); ?>
        


        <?php if(isset($_GET['page'])) {
            require("modele/page.class.php");
            page::invoke();

        } else {
            
            include("public/pages/accueil.php");

        } ?>

        

		<?php include("public/footer.php"); ?>

            <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <script type="text/javascript" src="js/js.js"></script>
            <script type="text/javascript" src="js/cookie.js"></script>
            <script type="text/javascript" src="js/jsImageBoutique.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js"></script>
            <script src="//api.dedipass.com/v1/pay.js"></script>
            <script>
                new ClipboardJS('.aServer');
            </script>
            <script type="text/javascript">
            class Slideshow {
            	constructor (userOptions = {}) {
                const defaultOptions = {
                  $el: $('.slideshow'),
                  showArrows: false,
                  showPagination: true,
                  duration: 8000,
                  autoplay: true
                }
                
                let options = Object.assign({}, defaultOptions, userOptions);
                
            		this.$el = options.$el;
            		this.maxSlide = this.$el.find($('.js-slider-home-slide')).length;
                this.showArrows = this.maxSlide > 1 ? options.showArrows : false;
                this.showPagination = options.showPagination;
            		this.currentSlide = 1;
            		this.isAnimating = false;
            		this.animationDuration = 1200;
            		this.autoplaySpeed = options.duration;
            		this.interval;
            		this.$controls = this.$el.find('.js-slider-home-button');
                this.autoplay = this.maxSlide > 1 ? options.autoplay : false;
            
            		this.$el.on('click', '.js-slider-home-next', (event) => this.nextSlide());
            		this.$el.on('click', '.js-slider-home-prev', (event) => this.prevSlide());
                this.$el.on('click', '.js-pagination-item', event => {
                  if (!this.isAnimating) {
                    this.preventClick();
              this.goToSlide(event.target.dataset.slide);
                  }
                });
            
            		this.init();
            	}
              
              init() {
                this.goToSlide(1);
                if (this.autoplay) {
                  this.startAutoplay();
                }
                
                if (this.showPagination) {
                  let paginationNumber = this.maxSlide;
                  let pagination = '<div class="pagination"><div class="container">';
                  
                  for (let i = 0; i < this.maxSlide; i++) {
                    let item = `<span class="pagination__item js-pagination-item ${ i === 0 ? 'is-current' : ''}" data-slide=${i + 1}>${i + 1}</span>`;
                    pagination  = pagination + item;
                  }
                  
                  pagination = pagination + '</div></div>';
                  
                  this.$el.append(pagination);
                }
              }
              
              preventClick() {
            		this.isAnimating = true;
            		this.$controls.prop('disabled', true);
            		clearInterval(this.interval);
            
            		setTimeout(() => {
            			this.isAnimating = false;
            			this.$controls.prop('disabled', false);
                  if (this.autoplay) {
            			  this.startAutoplay();
                  }
            		}, this.animationDuration);
            	}
            
            	goToSlide(index) {    
                this.currentSlide = parseInt(index);
                
                if (this.currentSlide > this.maxSlide) {
                  this.currentSlide = 1;
                }
                
                if (this.currentSlide === 0) {
                  this.currentSlide = this.maxSlide;
                }
                
                const newCurrent = this.$el.find('.js-slider-home-slide[data-slide="'+ this.currentSlide +'"]');
                const newPrev = this.currentSlide === 1 ? this.$el.find('.js-slider-home-slide').last() : newCurrent.prev('.js-slider-home-slide');
                const newNext = this.currentSlide === this.maxSlide ? this.$el.find('.js-slider-home-slide').first() : newCurrent.next('.js-slider-home-slide');
                
                this.$el.find('.js-slider-home-slide').removeClass('is-prev is-next is-current');
                this.$el.find('.js-pagination-item').removeClass('is-current');
                
            		if (this.maxSlide > 1) {
                  newPrev.addClass('is-prev');
                  newNext.addClass('is-next');
                }
                
                newCurrent.addClass('is-current');
                this.$el.find('.js-pagination-item[data-slide="'+this.currentSlide+'"]').addClass('is-current');
              }
              
              nextSlide() {
                this.preventClick();
                this.goToSlide(this.currentSlide + 1);
            	}
               
            	prevSlide() {
                this.preventClick();
                this.goToSlide(this.currentSlide - 1);
            	}
            
            	startAutoplay() {
            		this.interval = setInterval(() => {
            			if (!this.isAnimating) {
            				this.nextSlide();
            			}
            		}, this.autoplaySpeed);
            	}
            
            	destroy() {
            		this.$el.off();
            	}
            }
            </script>

    </body>
</html>