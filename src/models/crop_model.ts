export class Crop {
    cropId: string;
    commonName: string;
    scientificName: string;
    category: string;
    season: string;
    cropImg: string;
    fields: string[];

    constructor(
        cropId: string,
        commonName: string,
        scientificName: string,
        category: string,
        season: string,
        cropImg: string,
        fields: string[]
    ) {
        this.cropId = cropId;
        this.commonName = commonName;
        this.scientificName = scientificName;
        this.category = category;
        this.season = season;
        this.cropImg = cropImg;
        this.fields = fields;
    }
}
