import React, { Component} from 'react';

// 异步加载组件
function asyncLoad(componentLoad) {
  return class ContentComponent extends Component {
    state = {
        com: null,
        err: null
    }
    componentDidMount() {
      componentLoad().then(mod => {
        mod = mod.default || mod;
        return setTimeout(()=>{this.setState({ com: mod})}, 3000)
      }).catch((e)=>{
        this.setState({err: e || '组件加载失败'});
      });
    }
    render() {
        if (this.state.com) {
          return (<this.state.com {...this.props} />)
        }
        if(this.state.err) {
          return <div>
            {this.state.err}
          </div>
        }
        return <div style={{
          width: '100%',
          height: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize:30
        }}>
          loading
        </div>
    }
  }
}

export default asyncLoad;
