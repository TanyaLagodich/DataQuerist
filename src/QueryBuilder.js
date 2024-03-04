class QueryBuilder {
    constructor() {
        this.selectFields = [];
        this.currentField = null;
        this.conditions = [];
    }

    select(fields) {
        this.selectFields = fields;
        return this;
    }

    where(field) {
        this.currentField = field;
        return this;
    }

    includes(...values) {
        this.conditions.push({
            field: this.currentField,
            type: 'includes',
            values,
        });

        return this;
    }


}
