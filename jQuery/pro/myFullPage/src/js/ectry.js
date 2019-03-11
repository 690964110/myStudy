<<<<<<< HEAD
// $('.wrapper').myFullPage({
//     colorsArray: ['orange', 'aqua', 'green'],
//     onLeave: function(index,direction){
//         $('.section').eq(index).trigger('_leave');
//     },
//     afterLoad: function(index, direction){
//         $('.section').eq(index).trigger('_load');
//     }
// })

// // function ComponentFactory(config){
// //     var $Div = $('<div class="component" style="display:none; text-align:center; font-size:30px;"><span></span></div>')
// //     $Div.find('span').text('duyi');
// //     $Div.on('cpLeave',function(){
// //         $(this).fadeOut();
// //     });
// //     $Div.on('cpLoad',function(){
// //         $(this).fadeIn();
// //     })
// //     return $Div;
// // }

//  $('.section').each(function(index, ele){
//     $(ele).append(ComponentFactory({
//         className:'duyi',
//         width: 552,
//         height: 336,
//         text:'渡一教育创立于2015年！ 在成哥 邓哥 彤哥的带领下已经向着高端变成教育公司大踏步的',
//         center: true,
//         css: {
//             position:'absolute',
//             opacity: 0,
//             top: 0,
//             backgroundImage: 'url(./src/img/3.jpg)',
//             backgroundSize: '100% 100%',
//             padding: '10px 15px 10px 15px',
//             textAlign:'justify',
//             fontSize:"18px",
//             fontWeight: '900',
//             lineHeight:'25px'
//         },
//         animateIn:{
//             opacity: 1,
//             top: 240
//         },
//         animateOut:{
//             opacity: 0,
//             top: 0
//         },
//         delay: 1000,
//         event:{
//             click: function(){
//                 alert($(this).text());
//             },
//             mouseenter: function(){
//                 console.log('success');
//             }
//         }
//     }));
// })

// $('.section').on('_leave',function(){
//     $(this).find('.component').trigger('cpLeave');
// })
// $('.section').on('_load',function(){    
//     $(this).find('.component').trigger('cpLoad');
// })

pageEngine.init('.wrapper',['orange', 'aqua', 'green'])
                .addSection('oneSection')
                    .addComponent({
                        type: 'base',
                        className:'duyi',
                        width: 552,
                        height: 336,
                        text:'渡一教育创立于2015年！ 在成哥 邓哥 彤哥的带领下已经向着高端变成教育公司大踏步的',
                        center: true,
                        css: {
                            position:'absolute',
                            opacity: 0,
                            top: 0,
                            backgroundImage: 'url(./src/img/3.jpg)',
                            backgroundSize: '100% 100%',
                            padding: '10px 15px 10px 15px',
                            textAlign:'justify',
                            fontSize:"18px",
                            fontWeight: '900',
                            lineHeight:'25px'
                        },
                        animateIn:{
                            opacity: 1,
                            top: 240
                        },
                        animateOut:{
                            opacity: 0,
                            top: 0
                        },
                        delay: 1000,
                        event:{
                            click: function(){
                                alert($(this).text());
                            },
                            mouseenter: function(){
                                console.log('success');
                            }
                        }
                    })
                .addSection('twoSection')
                    .addComponent({
                        type: 'base',
                        className:'duyi',
                        width: 552,
                        height: 336,
                        text:'渡一教育创立于2015年！ 在成哥 邓哥 彤哥的带领下已经向着高端变成教育公司大踏步的',
                        center: true,
                        css: {
                            position:'absolute',
                            opacity: 0,
                            top: 0,
                            backgroundImage: 'url(./src/img/3.jpg)',
                            backgroundSize: '100% 100%',
                            padding: '10px 15px 10px 15px',
                            textAlign:'justify',
                            fontSize:"18px",
                            fontWeight: '900',
                            lineHeight:'25px'
                        },
                        animateIn:{
                            opacity: 1,
                            top: 240
                        },
                        animateOut:{
                            opacity: 0,
                            top: 0
                        },
                        delay: 1000,
                        event:{
                            click: function(){
                                alert($(this).text());
                            },
                            mouseenter: function(){
                                console.log('success');
                            }
                        }
                    })
                .addSection('threeSection')
                    .addSlide('3-slide-1')
                        .addComponent({
                            type: 'base',
                            className:'duyi',
                            width: 552,
                            height: 336,
                            text:'渡一教育创立于2015年！ 在成哥 邓哥 彤哥的带领下已经向着高端变成教育公司大踏步的',
                            center: true,
                            css: {
                                position:'absolute',
                                opacity: 0,
                                top: 0,
                                backgroundImage: 'url(./src/img/3.jpg)',
                                backgroundSize: '100% 100%',
                                padding: '10px 15px 10px 15px',
                                textAlign:'justify',
                                fontSize:"18px",
                                fontWeight: '900',
                                lineHeight:'25px'
                            },
                            animateIn:{
                                opacity: 1,
                                top: 240
                            },
                            animateOut:{
                                opacity: 0,
                                top: 0
                            },
                            delay: 1000,
                            event:{
                                click: function(){
                                    alert($(this).text());
                                },
                                mouseenter: function(){
                                    console.log('success');
                                }
                            }
                        })
                        .addSlide('3-slide-2')
                        .addComponent({
                            type: 'base',
                            className:'duyi',
                            width: 552,
                            height: 336,
                            text:'渡一教育创立于2015年！ 在成哥 邓哥 彤哥的带领下已经向着高端变成教育公司大踏步的',
                            center: true,
                            css: {
                                position:'absolute',
                                opacity: 0,
                                top: 0,
                                backgroundImage: 'url(./src/img/3.jpg)',
                                backgroundSize: '100% 100%',
                                padding: '10px 15px 10px 15px',
                                textAlign:'justify',
                                fontSize:"18px",
                                fontWeight: '900',
                                lineHeight:'25px'
                            },
                            animateIn:{
                                opacity: 1,
                                top: 240
                            },
                            animateOut:{
                                opacity: 0,
                                top: 0
                            },
                            delay: 1000,
                            event:{
                                click: function(){
                                    alert($(this).text());
                                },
                                mouseenter: function(){
                                    console.log('success');
                                }
                            }
                        })
                        .addSlide('3-slide-3')
                        .addComponent({
                            type: 'base',


                            className:'duyi',
                            width: 552,
                            height: 336,
                            text:'渡一教育创立于2015年！ 在成哥 邓哥 彤哥的带领下已经向着高端变成教育公司大踏步的',
                            center: true,
                            css: {
                                position:'absolute',
                                opacity: 0,
                                top: 0,
                                backgroundImage: 'url(./src/img/3.jpg)',
                                backgroundSize: '100% 100%',
                                padding: '10px 15px 10px 15px',
                                textAlign:'justify',
                                fontSize:"18px",
                                fontWeight: '900',
                                lineHeight:'25px'
                            },
                            animateIn:{
                                opacity: 1,
                                top: 240
                            },
                            animateOut:{
                                opacity: 0,
                                top: 0
                            },
                            delay: 1000,
                            event:{
                                click: function(){
                                    alert($(this).text());
                                },
                                mouseenter: function(){
                                    console.log('success');
                                }
                            }
                        }).load();














=======
// $('.wrapper').myFullPage({
//     colorsArray: ['orange', 'aqua', 'green'],
//     onLeave: function(index,direction){
//         $('.section').eq(index).trigger('_leave');
//     },
//     afterLoad: function(index, direction){
//         $('.section').eq(index).trigger('_load');
//     }
// })

// // function ComponentFactory(config){
// //     var $Div = $('<div class="component" style="display:none; text-align:center; font-size:30px;"><span></span></div>')
// //     $Div.find('span').text('duyi');
// //     $Div.on('cpLeave',function(){
// //         $(this).fadeOut();
// //     });
// //     $Div.on('cpLoad',function(){
// //         $(this).fadeIn();
// //     })
// //     return $Div;
// // }

//  $('.section').each(function(index, ele){
//     $(ele).append(ComponentFactory({
//         className:'duyi',
//         width: 552,
//         height: 336,
//         text:'渡一教育创立于2015年！ 在成哥 邓哥 彤哥的带领下已经向着高端变成教育公司大踏步的',
//         center: true,
//         css: {
//             position:'absolute',
//             opacity: 0,
//             top: 0,
//             backgroundImage: 'url(./src/img/3.jpg)',
//             backgroundSize: '100% 100%',
//             padding: '10px 15px 10px 15px',
//             textAlign:'justify',
//             fontSize:"18px",
//             fontWeight: '900',
//             lineHeight:'25px'
//         },
//         animateIn:{
//             opacity: 1,
//             top: 240
//         },
//         animateOut:{
//             opacity: 0,
//             top: 0
//         },
//         delay: 1000,
//         event:{
//             click: function(){
//                 alert($(this).text());
//             },
//             mouseenter: function(){
//                 console.log('success');
//             }
//         }
//     }));
// })

// $('.section').on('_leave',function(){
//     $(this).find('.component').trigger('cpLeave');
// })
// $('.section').on('_load',function(){    
//     $(this).find('.component').trigger('cpLoad');
// })

pageEngine.init('.wrapper',['orange', 'aqua', 'green'])
                .addSection('oneSection')
                    .addComponent({
                        type: 'base',
                        className:'duyi',
                        width: 552,
                        height: 336,
                        text:'渡一教育创立于2015年！ 在成哥 邓哥 彤哥的带领下已经向着高端变成教育公司大踏步的',
                        center: true,
                        css: {
                            position:'absolute',
                            opacity: 0,
                            top: 0,
                            backgroundImage: 'url(./src/img/3.jpg)',
                            backgroundSize: '100% 100%',
                            padding: '10px 15px 10px 15px',
                            textAlign:'justify',
                            fontSize:"18px",
                            fontWeight: '900',
                            lineHeight:'25px'
                        },
                        animateIn:{
                            opacity: 1,
                            top: 240
                        },
                        animateOut:{
                            opacity: 0,
                            top: 0
                        },
                        delay: 1000,
                        event:{
                            click: function(){
                                alert($(this).text());
                            },
                            mouseenter: function(){
                                console.log('success');
                            }
                        }
                    })
                .addSection('twoSection')
                    .addComponent({
                        type: 'base',
                        className:'duyi',
                        width: 552,
                        height: 336,
                        text:'渡一教育创立于2015年！ 在成哥 邓哥 彤哥的带领下已经向着高端变成教育公司大踏步的',
                        center: true,
                        css: {
                            position:'absolute',
                            opacity: 0,
                            top: 0,
                            backgroundImage: 'url(./src/img/3.jpg)',
                            backgroundSize: '100% 100%',
                            padding: '10px 15px 10px 15px',
                            textAlign:'justify',
                            fontSize:"18px",
                            fontWeight: '900',
                            lineHeight:'25px'
                        },
                        animateIn:{
                            opacity: 1,
                            top: 240
                        },
                        animateOut:{
                            opacity: 0,
                            top: 0
                        },
                        delay: 1000,
                        event:{
                            click: function(){
                                alert($(this).text());
                            },
                            mouseenter: function(){
                                console.log('success');
                            }
                        }
                    })
                .addSection('threeSection')
                    .addSlide('3-slide-1')
                        .addComponent({
                            type: 'base',
                            className:'duyi',
                            width: 552,
                            height: 336,
                            text:'渡一教育创立于2015年！ 在成哥 邓哥 彤哥的带领下已经向着高端变成教育公司大踏步的',
                            center: true,
                            css: {
                                position:'absolute',
                                opacity: 0,
                                top: 0,
                                backgroundImage: 'url(./src/img/3.jpg)',
                                backgroundSize: '100% 100%',
                                padding: '10px 15px 10px 15px',
                                textAlign:'justify',
                                fontSize:"18px",
                                fontWeight: '900',
                                lineHeight:'25px'
                            },
                            animateIn:{
                                opacity: 1,
                                top: 240
                            },
                            animateOut:{
                                opacity: 0,
                                top: 0
                            },
                            delay: 1000,
                            event:{
                                click: function(){
                                    alert($(this).text());
                                },
                                mouseenter: function(){
                                    console.log('success');
                                }
                            }
                        })
                        .addSlide('3-slide-2')
                        .addComponent({
                            type: 'base',
                            className:'duyi',
                            width: 552,
                            height: 336,
                            text:'渡一教育创立于2015年！ 在成哥 邓哥 彤哥的带领下已经向着高端变成教育公司大踏步的',
                            center: true,
                            css: {
                                position:'absolute',
                                opacity: 0,
                                top: 0,
                                backgroundImage: 'url(./src/img/3.jpg)',
                                backgroundSize: '100% 100%',
                                padding: '10px 15px 10px 15px',
                                textAlign:'justify',
                                fontSize:"18px",
                                fontWeight: '900',
                                lineHeight:'25px'
                            },
                            animateIn:{
                                opacity: 1,
                                top: 240
                            },
                            animateOut:{
                                opacity: 0,
                                top: 0
                            },
                            delay: 1000,
                            event:{
                                click: function(){
                                    alert($(this).text());
                                },
                                mouseenter: function(){
                                    console.log('success');
                                }
                            }
                        })
                        .addSlide('3-slide-3')
                        .addComponent({
                            type: 'base',


                            className:'duyi',
                            width: 552,
                            height: 336,
                            text:'渡一教育创立于2015年！ 在成哥 邓哥 彤哥的带领下已经向着高端变成教育公司大踏步的',
                            center: true,
                            css: {
                                position:'absolute',
                                opacity: 0,
                                top: 0,
                                backgroundImage: 'url(./src/img/3.jpg)',
                                backgroundSize: '100% 100%',
                                padding: '10px 15px 10px 15px',
                                textAlign:'justify',
                                fontSize:"18px",
                                fontWeight: '900',
                                lineHeight:'25px'
                            },
                            animateIn:{
                                opacity: 1,
                                top: 240
                            },
                            animateOut:{
                                opacity: 0,
                                top: 0
                            },
                            delay: 1000,
                            event:{
                                click: function(){
                                    alert($(this).text());
                                },
                                mouseenter: function(){
                                    console.log('success');
                                }
                            }
                        }).load();














>>>>>>> 2c31271da4abb59f594c272f997dfa72a631001a
