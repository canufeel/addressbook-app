
export default function(){
	this.transition(
    	this.hasClass('sidebar-right'),
    	this.toValue(true),
    	this.use('toLeft',{duration:750}),
    	this.reverse('toRight',{duration:750})
  	);
  	this.transition(
    	this.hasClass('sidebar-right-mobile'),
    	this.toValue(false),
    	this.use('toLeft',{duration:750}),
    	this.reverse('toRight',{duration:750})
  	);
}