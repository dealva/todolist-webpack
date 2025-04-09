const path =require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports=(env,argv)=>{
    const isProduction = argv.mode === 'production';
    return {
        mode : isProduction || 'development',
        entry: path.resolve(__dirname,'src','script.js'),
        output:{
            path:path.resolve(__dirname, 'build'),
            filename:isProduction ? 'app-[contenthash].js' : 'app.js',
            clean:true
        },
        plugins:[
            new MiniCssExtractPlugin({
                filename:isProduction ? 'app-[contenthash].css' : 'app.css'
            }),
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
	

}