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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2F0dGFjaGVkZG9jLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7S0FFUSxlQUFlLGtEQUVWLFdBQVc7Ozs7QUFGaEIsa0JBQWUsb0JBQWYsZUFBZTs7Ozs7Ozs7Ozs7Ozs7QUFFVixjQUFXO0FBQ1osYUFEQyxXQUFXLENBQ1gsSUFBSSxFQUFDOzJCQURMLFdBQVc7O0FBRWhCLGdDQUZLLFdBQVcsNkNBRVYsSUFBSSxFQUFFO0FBQ2xCLFNBQUksQUFBQyxJQUFJLElBQUksU0FBUyxJQUFNLElBQUksSUFBSSxJQUFJLEFBQUMsRUFBQztBQUN6QyxVQUFJLEFBQUMsSUFBSSxTQUFZLElBQUcsU0FBUyxJQUFNLElBQUksU0FBWSxJQUFJLElBQUksQUFBQyxFQUFDO0FBQ2hFLFdBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxTQUFZLENBQUM7T0FDakM7QUFDUSxVQUFJLEFBQUMsSUFBSSxNQUFTLElBQUcsU0FBUyxJQUFNLElBQUksTUFBUyxJQUFJLElBQUksQUFBQyxFQUFDO0FBQ25FLFdBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxNQUFTLENBQUM7T0FDM0I7QUFDRCxVQUFJLEFBQUMsSUFBSSxLQUFRLElBQUcsU0FBUyxJQUFNLElBQUksS0FBUSxJQUFJLElBQUksQUFBQyxFQUFDO0FBQ3hELFdBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFRLENBQUM7T0FDekI7QUFDUSxVQUFJLEFBQUMsSUFBSSxLQUFRLElBQUcsU0FBUyxJQUFNLElBQUksS0FBUSxJQUFJLElBQUksQUFBQyxFQUFDO0FBQ2pFLFdBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFRLENBQUM7T0FDekI7TUFDRDtBQUFBLEtBQ0Q7O2NBakJXLFdBQVc7O2lCQUFYLFdBQVc7QUFrQmhCLG9CQUFlOztXQUFBLFlBQUU7QUFDakIsY0FBTyxjQUFjLENBQUM7T0FDekI7O0FBS0csYUFBUTs7O1dBSEMsWUFBRTtBQUNYLGNBQU8sQUFBQyxJQUFJLENBQUMsS0FBSyxJQUFJLFNBQVMsR0FBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztPQUN4RDs7V0FDVyxVQUFDLENBQUMsRUFBQztBQUNYLFdBQUksQ0FBQyxLQUFLLEdBQUcsQUFBQyxBQUFDLENBQUMsSUFBSSxTQUFTLElBQU0sQ0FBQyxJQUFJLElBQUksQUFBQyxJQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxBQUFDLEdBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztPQUM3Rjs7QUFDQSxpQkFBWTs7V0FBQSxZQUFHO0FBQ2xCLGNBQVEsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUU7T0FDL0I7O0FBS00sVUFBSzs7O1dBSEMsWUFBRztBQUNULGNBQU8sQUFBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsR0FBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztPQUMxRDs7V0FDUSxVQUFDLENBQUMsRUFBQztBQUNSLFdBQUksQ0FBQyxNQUFNLEdBQUcsQUFBQyxBQUFDLENBQUMsSUFBSSxTQUFTLElBQU0sQ0FBQyxJQUFJLElBQUksQUFBQyxJQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxBQUFDLEdBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztPQUM5Rjs7QUFDQSxjQUFTOztXQUFBLFlBQUc7QUFDZixjQUFRLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFFO09BQzVCOztBQUlNLFNBQUk7V0FISCxZQUFHO0FBQ0osY0FBTyxBQUFDLElBQUksQ0FBQyxLQUFLLElBQUksU0FBUyxHQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO09BQ3hEOztXQUNPLFVBQUMsQ0FBQyxFQUFDO0FBQ1AsV0FBSSxDQUFDLEtBQUssR0FBRyxBQUFDLEFBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBTSxDQUFDLElBQUksSUFBSSxBQUFDLElBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEFBQUMsR0FBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO09BQzdGOztBQUNBLGFBQVE7O1dBQUEsWUFBRztBQUNkLGNBQVEsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUU7T0FDM0I7O0FBSU0sU0FBSTtXQUhDLFlBQUc7QUFDUixjQUFPLEFBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxTQUFTLEdBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7T0FDeEQ7O1dBQ08sVUFBQyxDQUFDLEVBQUM7QUFDUCxXQUFJLENBQUMsS0FBSyxHQUFHLEFBQUMsQUFBQyxDQUFDLElBQUksU0FBUyxJQUFNLENBQUMsSUFBSSxJQUFJLEFBQUMsR0FBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO09BQzdEOztBQUNBLGFBQVE7O1dBQUEsWUFBRztBQUNkLGNBQVEsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUU7T0FDM0I7O0FBQ0csaUJBQVk7V0FBQSxZQUFJO0FBQ25CLGNBQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztPQUM3RTs7QUFDRCxrQkFBYTthQUFBLHVCQUFDLElBQUksRUFBRztBQUNkLGtDQS9ESyxXQUFXLCtDQStESSxJQUFJLEVBQUU7QUFDaEMsV0FBSSxBQUFDLElBQUksSUFBSSxTQUFTLElBQU0sSUFBSSxJQUFJLElBQUksQUFBQyxFQUFDO0FBQ3pDLFlBQUksSUFBSSxDQUFDLFlBQVksRUFBQztBQUNyQixhQUFJLFNBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ2pDO0FBQ1EsWUFBSSxJQUFJLENBQUMsU0FBUyxFQUFDO0FBQzNCLGFBQUksTUFBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDM0I7QUFDRCxZQUFJLElBQUksQ0FBQyxRQUFRLEVBQUM7QUFDakIsYUFBSSxLQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUN6QjtBQUNRLFlBQUksSUFBSSxDQUFDLFFBQVEsRUFBQztBQUMxQixhQUFJLEtBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3pCO1FBQ0Q7T0FDRDtBQUFBOzs7O1dBOUVXLFdBQVc7TUFBUyxlQUFlIiwiZmlsZSI6ImRhdGEvZG9tYWluL2F0dGFjaGVkZG9jLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=