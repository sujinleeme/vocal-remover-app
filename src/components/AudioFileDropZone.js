import React from "react"
import Dropzone from "react-dropzone"

class AudioFileDropZone extends React.Component {
	constructor() {
		super()
		this.state = {files: []}
	}
	
	onDrop(files) {
		this.setState({
			files
		})
	}
	
	render() {
		return (
			<section>
				<div className="dropzone">
					<Dropzone
						accept="audio/*"
						onDrop={ this.onDrop.bind(this) }>
						<p>Try dropping some files here, or click to select files to upload.</p>
					</Dropzone>
				</div>
				<aside>
					<h2>Dropped files</h2>
					<ul>
						{
							this.state.files.map(f => <li key={ f.name }>{ f.name } - { f.size } bytes</li>)
						}
					</ul>
				</aside>
			</section>
		)
	}
}

export default AudioFileDropZone
