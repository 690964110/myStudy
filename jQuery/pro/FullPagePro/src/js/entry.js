pageEngine.init('.wrapper',['#302c24', '#17b8b8', '#e1d693'])
                .addSection('oneSection')
                    .addComponent({
                        type: 'base',
                        className:'duyi',
                        width: 552,
                        height: 336,
                        text:'洗jio群专用！',
                        center: true,
                        css: {
                            position:'absolute',
                            opacity: 0,
                            top: 0,
                            backgroundImage: 'url(./src/img/9.gif)',
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
                        text:'洗jio群专用！',
                        center: true,
                        css: {
                            position:'absolute',
                            opacity: 0,
                            top: 0,
                            backgroundImage: 'url(./src/img/10.gif)',
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
                            text:'洗jio群专用！',
                            center: true,
                            css: {
                                position:'absolute',
                                opacity: 0,
                                top: 0,
                                backgroundImage: 'url(./src/img/11.gif)',
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
                            text:'洗jio群专用！',
                            center: true,
                            css: {
                                position:'absolute',
                                opacity: 0,
                                top: 0,
                                backgroundImage: 'url(./src/img/12.jpg)',
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
                            text:'洗jio群专用！',
                            center: true,
                            css: {
                                position:'absolute',
                                opacity: 0,
                                top: 0,
                                backgroundImage: 'url(./src/img/13.png)',
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
                        }).addSlide('3-slide-3')
                        .addComponent({
                            type: 'base',


                            className:'duyi',
                            width: 552,
                            height: 336,
                            text:'洗jio群专用！',
                            center: true,
                            css: {
                                position:'absolute',
                                opacity: 0,
                                top: 0,
                                backgroundImage: 'url(./src/img/14.png)',
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
