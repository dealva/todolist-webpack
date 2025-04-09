const path =require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports={
	mode : process.env.NODE_ENV || 'development',
	entry: path.resolve(__dirname,'src','script.js'),
    output:{
		path:path.resolve(__dirname, 'build'),
		filename:'app.js',
		clean:true
	},
    plugins:[
		new MiniCssExtractPlugin({filename:`app${process.env.NODE_ENV==='production' ? '-[contenthash]': ''}.css`}),
		new HtmlWebpackPlugin({
			template:'./src/index.html'
		})
	],
    module:{
		rules:[
			{
				test:/\.css$/i , 
				use:[ 
                    MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader'
				    ]
			}
		]
	}

}