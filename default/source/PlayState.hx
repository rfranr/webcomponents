package;

import flixel.FlxState;
import flixel.FlxSprite;

class PlayState extends FlxState
{

	var _pixi : FlxSprite;

	override public function create()
	{
		super.create();

		var text = new flixel.text.FlxText ( 0,0, 0, "Hello JiJiJi", 64);

		text.screenCenter();

		add(text);

		_pixi = new flixel.FlxSprite();
		_pixi.loadGraphic ( "assets/pixi.png");

		add(_pixi);

		_pixi.x = 100;
		_pixi.y = 100;


	}

	override public function update(elapsed:Float)
	{
		super.update(elapsed);

		_pixi.x = _pixi.x + 1;

	}
}
	