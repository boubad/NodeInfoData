System.register(["./descriptionitem"], function (_export) {
	var DescriptionItem, _createClass, _get, _inherits, _classCallCheck, AttachedDoc;

	return {
		setters: [function (_descriptionitem) {
			DescriptionItem = _descriptionitem.DescriptionItem;
		}],
		execute: function () {
			"use strict";

			_createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			_get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

			_inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

			//
			AttachedDoc = _export("AttachedDoc", (function (_DescriptionItem) {
				function AttachedDoc(oMap) {
					_classCallCheck(this, AttachedDoc);

					_get(Object.getPrototypeOf(AttachedDoc.prototype), "constructor", this).call(this, oMap);
					this.type = "attacheddoc";
					if (oMap != undefined && oMap != null) {
						if (oMap.mimetype != undefined && oMap.mimetype != null) {
							this.mimetype = oMap.mimetype;
						}
						if (oMap.genre != undefined && oMap.genre != null) {
							this.genre = oMap.genre;
						}
						if (oMap.name != undefined && oMap.name != null) {
							this.name = oMap.name;
						}
						if (oMap.data != undefined && oMap.data != null) {
							this.data = oMap.data;
						}
					} // oMap
				}

				_inherits(AttachedDoc, _DescriptionItem);

				_createClass(AttachedDoc, {
					collection_name: { // constructor

						get: function () {
							return "attacheddocs";
						}
					},
					mimetype: {
						//

						get: function () {
							return this._mime != undefined ? this._mime : null;
						},
						//
						set: function (s) {
							this._mime = s != undefined && s != null && s.trim().length > 0 ? s.trim() : null;
						}
					},
					has_mimetype: { //

						get: function () {
							return this.mimetype != null;
						}
					},
					genre: {
						//

						get: function () {
							return this._genre != undefined ? this._genre : null;
						},
						//
						set: function (s) {
							this._genre = s != undefined && s != null && s.trim().length > 0 ? s.trim() : null;
						}
					},
					has_genre: { //

						get: function () {
							return this.genre != null;
						}
					},
					name: {
						get: function () {
							return this._name != undefined ? this._name : null;
						},
						// name
						set: function (s) {
							this._name = s != undefined && s != null && s.trim().length > 0 ? s.trim() : null;
						}
					},
					has_name: { // name

						get: function () {
							return this.name != null;
						}
					},
					data: {
						get: function () {
							return this._data != undefined ? this._data : null;
						},
						//
						set: function (s) {
							this._data = s != undefined && s != null ? s : null;
						}
					},
					has_data: { //

						get: function () {
							return this.data != null;
						}
					},
					is_storeable: {
						get: function () {
							return this.has_data && this.has_genre && this.has_mimetype && this.has_name;
						}
					},
					to_insert_map: {
						value: function to_insert_map(oMap) {
							_get(Object.getPrototypeOf(AttachedDoc.prototype), "to_insert_map", this).call(this, oMap);
							if (oMap != undefined && oMap != null) {
								if (this.has_mimetype) {
									oMap.mimetype = this.mimetype;
								}
								if (this.has_genre) {
									oMap.genre = this.genre;
								}
								if (this.has_name) {
									oMap.name = this.name;
								}
								if (this.has_data) {
									oMap.data = this.data;
								}
							}
						} // to_insert_map

					}
				});

				return AttachedDoc;
			})(DescriptionItem));
		}
	};
});
//attacheddoc.tjs
//
// class AttachedDoc
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2F0dGFjaGVkZG9jLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7S0FFUSxlQUFlLGtEQUVWLFdBQVc7Ozs7QUFGaEIsa0JBQWUsb0JBQWYsZUFBZTs7Ozs7Ozs7Ozs7Ozs7QUFFVixjQUFXO0FBQ1osYUFEQyxXQUFXLENBQ1gsSUFBSSxFQUFDOzJCQURMLFdBQVc7O0FBRWhCLGdDQUZLLFdBQVcsNkNBRVYsSUFBSSxFQUFFO0FBQ1osU0FBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7QUFDaEMsU0FBSSxBQUFDLElBQUksSUFBSSxTQUFTLElBQU0sSUFBSSxJQUFJLElBQUksQUFBQyxFQUFDO0FBQ3pDLFVBQUksQUFBQyxJQUFJLFNBQVksSUFBRyxTQUFTLElBQU0sSUFBSSxTQUFZLElBQUksSUFBSSxBQUFDLEVBQUM7QUFDaEUsV0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFNBQVksQ0FBQztPQUNqQztBQUNRLFVBQUksQUFBQyxJQUFJLE1BQVMsSUFBRyxTQUFTLElBQU0sSUFBSSxNQUFTLElBQUksSUFBSSxBQUFDLEVBQUM7QUFDbkUsV0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLE1BQVMsQ0FBQztPQUMzQjtBQUNELFVBQUksQUFBQyxJQUFJLEtBQVEsSUFBRyxTQUFTLElBQU0sSUFBSSxLQUFRLElBQUksSUFBSSxBQUFDLEVBQUM7QUFDeEQsV0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEtBQVEsQ0FBQztPQUN6QjtBQUNRLFVBQUksQUFBQyxJQUFJLEtBQVEsSUFBRyxTQUFTLElBQU0sSUFBSSxLQUFRLElBQUksSUFBSSxBQUFDLEVBQUM7QUFDakUsV0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEtBQVEsQ0FBQztPQUN6QjtNQUNEO0FBQUEsS0FDRDs7Y0FsQlcsV0FBVzs7aUJBQVgsV0FBVztBQW1CaEIsb0JBQWU7O1dBQUEsWUFBRTtBQUNqQixjQUFPLGNBQWMsQ0FBQztPQUN6Qjs7QUFLRyxhQUFROzs7V0FIQyxZQUFFO0FBQ1gsY0FBTyxBQUFDLElBQUksQ0FBQyxLQUFLLElBQUksU0FBUyxHQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO09BQ3hEOztXQUNXLFVBQUMsQ0FBQyxFQUFDO0FBQ1gsV0FBSSxDQUFDLEtBQUssR0FBRyxBQUFDLEFBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBTSxDQUFDLElBQUksSUFBSSxBQUFDLElBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEFBQUMsR0FBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO09BQzdGOztBQUNBLGlCQUFZOztXQUFBLFlBQUc7QUFDbEIsY0FBUSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBRTtPQUMvQjs7QUFLTSxVQUFLOzs7V0FIQyxZQUFHO0FBQ1QsY0FBTyxBQUFDLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxHQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO09BQzFEOztXQUNRLFVBQUMsQ0FBQyxFQUFDO0FBQ1IsV0FBSSxDQUFDLE1BQU0sR0FBRyxBQUFDLEFBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBTSxDQUFDLElBQUksSUFBSSxBQUFDLElBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEFBQUMsR0FBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO09BQzlGOztBQUNBLGNBQVM7O1dBQUEsWUFBRztBQUNmLGNBQVEsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUU7T0FDNUI7O0FBSU0sU0FBSTtXQUhILFlBQUc7QUFDSixjQUFPLEFBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxTQUFTLEdBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7T0FDeEQ7O1dBQ08sVUFBQyxDQUFDLEVBQUM7QUFDUCxXQUFJLENBQUMsS0FBSyxHQUFHLEFBQUMsQUFBQyxDQUFDLElBQUksU0FBUyxJQUFNLENBQUMsSUFBSSxJQUFJLEFBQUMsSUFBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQUFBQyxHQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7T0FDN0Y7O0FBQ0EsYUFBUTs7V0FBQSxZQUFHO0FBQ2QsY0FBUSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBRTtPQUMzQjs7QUFJTSxTQUFJO1dBSEMsWUFBRztBQUNSLGNBQU8sQUFBQyxJQUFJLENBQUMsS0FBSyxJQUFJLFNBQVMsR0FBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztPQUN4RDs7V0FDTyxVQUFDLENBQUMsRUFBQztBQUNQLFdBQUksQ0FBQyxLQUFLLEdBQUcsQUFBQyxBQUFDLENBQUMsSUFBSSxTQUFTLElBQU0sQ0FBQyxJQUFJLElBQUksQUFBQyxHQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7T0FDN0Q7O0FBQ0EsYUFBUTs7V0FBQSxZQUFHO0FBQ2QsY0FBUSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBRTtPQUMzQjs7QUFDRyxpQkFBWTtXQUFBLFlBQUk7QUFDbkIsY0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO09BQzdFOztBQUNELGtCQUFhO2FBQUEsdUJBQUMsSUFBSSxFQUFHO0FBQ2Qsa0NBaEVLLFdBQVcsK0NBZ0VJLElBQUksRUFBRTtBQUNoQyxXQUFJLEFBQUMsSUFBSSxJQUFJLFNBQVMsSUFBTSxJQUFJLElBQUksSUFBSSxBQUFDLEVBQUM7QUFDekMsWUFBSSxJQUFJLENBQUMsWUFBWSxFQUFDO0FBQ3JCLGFBQUksU0FBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDakM7QUFDUSxZQUFJLElBQUksQ0FBQyxTQUFTLEVBQUM7QUFDM0IsYUFBSSxNQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUMzQjtBQUNELFlBQUksSUFBSSxDQUFDLFFBQVEsRUFBQztBQUNqQixhQUFJLEtBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3pCO0FBQ1EsWUFBSSxJQUFJLENBQUMsUUFBUSxFQUFDO0FBQzFCLGFBQUksS0FBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDekI7UUFDRDtPQUNEO0FBQUE7Ozs7V0EvRVcsV0FBVztNQUFTLGVBQWUiLCJmaWxlIjoiZGF0YS9kb21haW4vYXR0YWNoZWRkb2MuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==