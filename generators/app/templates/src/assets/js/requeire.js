import $ from '../../assets/js/axios.js'
import appurl from '../../assets/js/utils/appurl'

export default {
	// init
	init() {
		return $.axios({
			method: 'POST',
			url: `${appurl}/xxxxx/xxxxx`,
			data: {}
		})
	}
}