// document.addEventListener("DOMContentLoaded", function() {


//     var nextProject = document.querySelector('.js-project-next');

//     Barba.Pjax.start();
//     // Barba.Prefetch.init();


//     var MovePage = Barba.BaseTransition.extend({
//         start: function() {


//             Promise
//             .all([this.newContainerLoading, this.scrollTop()])
//             .then(this.movePages.bind(this));
//         },

//         scrollTop: function() {
//             var deferred = Barba.Utils.deferred();
//             var obj = { y: window.pageYOffset };

//             TweenLite.to(obj, 0.4, {
//                 y: 0,
//                 onUpdate: function() {
//                   if (obj.y === 0) {
//                     deferred.resolve();
//                 }

//                 window.scroll(0, obj.y);
//             },
//             onComplete: function() {
//                 deferred.resolve();
//             }
//         });

//             return deferred.promise;
//         },

//         movePages: function() {
//             var _this = this;
//             var goingForward = true;
//             this.updateLinks();

//             if (this.getNewPageFile() === this.oldContainer.dataset.prev) {
//                 goingForward = false;
//             }

//             TweenLite.set(this.newContainer, {
//                 visibility: 'visible',
//                 xPercent: goingForward ? 100 : -100,
//                 position: 'fixed',
//                 left: 0,
//                 top: 0,
//                 right: 0
//             });

//             TweenLite.to(this.oldContainer, 0.6, { xPercent: goingForward ? -100 : 100 });
//             TweenLite.to(this.newContainer, 0.6, { xPercent: 0, onComplete: function() {
//                 TweenLite.set(_this.newContainer, { clearProps: 'all' });
//                 _this.done();
//             }});
//         },

//         updateLinks: function() {
//             if(nextProject) {
//                 nextProject.href = this.newContainer.dataset.next;
//             }

//         },

//         getNewPageFile: function() {
//             return Barba.HistoryManager.currentStatus().url.split('/').pop();
//         }
//     });


//     var Homepage = Barba.BaseView.extend({
//         namespace: 'homepage',
//         onEnter: function() {
//             // The new Container is ready and attached to the DOM

//             console.log('landing');

//             var filterSelector = document.querySelector('.js-filter-selector');
//             filterSelector.classList.remove('vertical');
//         },
//         onEnterCompleted: function() {
//             // The Transition has just finished.
//         },
//         onLeave: function() {
//             // A new Transition toward a new page has just started.
//             var filterSelector = document.querySelector('.js-filter-selector');
//             filterSelector.classList.add('vertical');
//         },
//         onLeaveCompleted: function() {
//             // The Container has just been removed from the DOM.
//         }
//     });

//     Homepage.init();


//     Barba.Pjax.getTransition = function() {
//         return MovePage;
//     };
// });
