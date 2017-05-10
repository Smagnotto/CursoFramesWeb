(function () {
    app.component('field', {
        bindings: {
            grid: '@',
            id: '@',
            label: '@',
            placeholder: '@',
            type: '@'
        },
        controller: [
            'gridSystem',
            function (gridSystem) {
                this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid)
            }
        ],
        template: `
            <div class="{{ $ctrl.gridClasses }}">
                <div class="form-group">
                    <label for="{{ $ctrl.id }}">{{ $ctrl.label }}</label>
                    <input type="{{ $ctrl.type }}" id="{{ $ctrl.id }}" class="form-control" placeholder="{{ $ctrl.placeholder }}" />
                </div>
            </div>
        `
    });
})();