var aos = aos || {};

aos.buildingTemplates = {
    "Metal mine": {
        "type": "mine",
        "svgCode": "M146.063 25.656c-30.86.074-60.556 12.052-85.094 36.313C3.285 119 12.986 194.422 63.905 245.343c12.042 12.04 47.124 35.39 78.75 55.437l36.938-36.967c-23.064-18.33-46.265-37.235-54.375-45.344-38.193-38.193-42.604-75.96-13.44-105.126 29.167-29.166 66.482-24.61 105.126 14.03 8.09 8.09 26.932 31.048 45.22 53.907l37.03-37.03c-20.045-31.623-43.335-66.74-55.375-78.78-30.685-26.483-64.868-39.892-97.718-39.814zM309.375 160.47L273.845 196c13.103 16.54 24.525 31.2 29.5 37.656l31.53-31.53s-10.95-18.314-25.5-41.657zm54.125 33.124c-31.963 73.943-90.175 135.65-167.313 169.22 96.67-10.858 166.86-86.763 167.313-169.22zm58.438 0C378.812 293.36 300.23 376.616 196.155 421.906c130.426-14.648 225.167-117.06 225.78-228.312zm72.53 0C437.49 325.414 333.7 435.407 196.19 495.25c172.33-19.356 297.47-154.66 298.28-301.656zM194.345 275.5l-35.438 35.438c23.348 14.552 41.656 25.5 41.656 25.5l31.532-31.532c-6.443-4.963-21.143-16.33-37.75-29.406z",
        "constructionCost": [
            {
                "name": "metal",
                "quantity": 100
            }
        ],
        "produce": {
            "product": [
                {
                    "name": "metal",
                    "quantity": 1000,
                    "to": "storage"
                },
                {
                    "name": "oxocarbon",
                    "quantity": 100,
                    "to": "planet"
                }
            ],
            "require": [
                {
                    "name": "energy",
                    "quantity": 50,
                    "planetResource": true
                },
                {
                    "name": "metal",
                    "quantity": 1000,
                    "planetResource": true
                }
            ]
        },
        "location": [{ "name": "ground" }]
    },
    "Fissile Material mine": {
        "type": "mine",
        "svgCode": "M77.637 19.54l108.717 144.544C145.316 176.7 91.09 152.704 40.102 132.53c40.576 32.116 110.02 65.16 103.662 97.53-6.637 33.79-75.205 49.33-121.065 72.52 46.032-5.046 91.778-21.09 120.15-9.78L18.38 347.136v20.39l138.388-60.41c2.133 14.26-9.665 37.273-22.043 55.985 22.007-10.08 46.61-21.938 65.523-22.06l-88.396 153.774h21.554l85.24-148.283c.553.434 1.093.892 1.616 1.382 33.55 31.47 34.284 87.542 43.888 141.225 9.885-54.016 13.682-119.31 41.846-138.094 16.562-11.047 96.26 29.193 143.596 57.07-22.238-21.752-82.32-73.64-85.68-95.812l129.744 65.993v-20.967L373.928 296.43c15.57-11.084 41.937-10.558 69.68-9.85-24.522-9.618-58.892-23.885-65.766-41.35l115.814-14.85v-18.843L380.154 226.09c14.736-32.777 66.75-61.05 108.05-93.555-49.74 19.266-106.767 55.532-135.92 41.254L493.655 31.177v-11.64H478.88L338.847 160.8c-18.24-30.214-6.765-92.786-3.715-141.26h-1.612C310.903 69.054 293.7 132.87 265 145.722c-17.43 7.805-35.296-38.196-47.615-67.204-2.256 29.66.042 60.142-14.79 76.07L101.022 19.54H77.638zM264.99 164.856c14.46-.133 28.89 7.536 38.207 19.274l-37.6 39.634-32.01-42.682c8.894-11.298 20.157-16.12 31.403-16.225zm-63.12 19.854l27.67 36.79-24.913 14.285 11.115 25.197-41.054 17.92c-7.104-35.84-1.95-70.025 27.18-94.19zm123.444 5.81c13.297 3.537 23.613 20.006 22.25 32.79h-.002l-40.875 12.2-14.755 1.892 33.382-46.882zm-27.04 60.994l60.404 1.707c3.703 9.603.78 23.42-6.65 32.07l-33.456-17.015-20.3-16.76zm-57.426 18.9l-32.82 57.094c-15.34-7.173-26.714-18.043-29.585-29.854l62.405-27.24zm21.537.027l52.084 28.67c-20.86 34.903-58.097 41.72-88.45 34.593l36.365-63.262z",
        "constructionCost": [
            {
                "name": "metal",
                "quantity": 500
            }
        ],
        "produce": {
            "product": [
                {
                    "name": "fissile material",
                    "quantity": 1000,
                    "to": "storage"
                }
            ],
            "require": [
                {
                    "name": "energy",
                    "quantity": 50,
                    "planetResource": true
                },
                {
                    "name": "fissile material",
                    "quantity": 50,
                    "planetResource": true
                }
            ]
        },
        "location": [{ "name": "ground" }]
    },
    "Bacteria factory": {
        "type": "Factory",
        "svgCode": "M365.47 18.727c-11.353-.18-21.053 7.365-24.786 20.058h-.002c-24.423-7.6-57.52-4.092-68.328 19.856-15.69-20.86-47.866-13.98-55.194 9.85-7.328 23.828 13.462 49.474 44.68 48.55-3.078 33.98 44.304 54.69 81.764 39.132-.473 19.307 8.312 41.853 30.37 44.97-6.395 18.11 3.104 42.047 28.614 42.047 31.47 0 38.024-36.316 21.025-53.145 9.474-10.39 12.832-25.167 11.096-39.13 17.282 12.104 34.59-6.52 33.767-20.08-1.516-24.97-20.366-35.97-33.768-24.3-8.8-27.616-37.243-32.007-52.562-16.353 1.35-7.425.2-13.105-5.255-19.274 22.605-5.702 18.913-37.698 4.68-46.904-5.44-3.517-10.942-5.195-16.102-5.277zm68.37 5.13c-22.7 0-22.882 34.655 0 34.655s22.7-34.655 0-34.655zM177.672 74.842c-22.7 0-22.882 34.654 0 34.654s22.7-34.654 0-34.654zm64.695 59.38c-1.695.06-3.792.895-5.877 2.887-4.765 4.554-8.11 13.804-1.814 24.216 1.365 2.257 2.837 4.486 4.408 6.672l-14.21 26.414-34.43 59.637-153.62 87.682-.008.006c-11.038 6.375-16.508 14.786-17.537 24.037-1.03 9.254 2.46 20.22 13.083 31.508 45.295 48.134 101.19 77.71 164.907 95.106 15.645 4.267 26.47 2.614 33.156-2.1 6.686-4.712 11.047-13.382 11.047-28.413v-.006l.214-177.61 38.008-65.832c-14.036-3.907-26.16-10.638-36.332-18.932l8.967-16.67c13.568 12.152 31.753 20.64 55.14 20.645 11.536-.03 18.363-7.457 20.046-13.542.84-3.044.414-5.247-.604-6.73-1.018-1.48-3.004-3.204-8.754-3.66-31.006-2.452-53.782-15.764-68.293-39.714-2.816-4.65-5-5.413-6.797-5.584-.224-.02-.46-.028-.7-.02zm234.053 39.305c-22.7 0-22.882 34.655 0 34.655s22.7-34.655 0-34.655zm-44.668 86.022c-35.27 0-35.553 53.837 0 53.837s35.27-53.838 0-53.838zm-235.256 8.337l9.367 16.172-136.506 79.06-.005.003c-4 2.31-4.756 3.894-5.043 5.127-.29 1.233-.127 3.423 1.852 7.027.543.988 1.228 2.044 2.024 3.15l-.416-.193c18.068 27.077 54.2 61.967 89.34 80.934-23.56-10.45-50.91-25.15-72.737-40.756C69.11 407.5 56.51 396.524 49.78 384.272c-3.363-6.124-5.332-13.14-3.673-20.262 1.66-7.123 6.93-13.046 13.9-17.07l136.49-79.053zm-88.068 88.87c18.55 6.4 52.894 25.26 80.154 46.013 13.63 10.375 25.305 20.885 32.086 31.998 3.022 4.952 5.264 10.303 5.2 16.203l-20.626-9.488c-9.495-11.61-23.806-22.776-35.75-29.517-24.435-17.28-54.436-33.15-67.16-37.54l6.096-17.667z",
        "constructionCost": [
            {
                "name": "metal",
                "quantity": 500
            }
        ],
        "produce": {
            "product": [
                {
                    "name": "bacteria",
                    "quantity": 1000,
                    "to": "storage"
                }
            ],
            "require": [
                {
                    "name": "fresh water",
                    "quantity": 1000,
                    "planetResource": true
                },
                {
                    "name": "mineral",
                    "quantity": 1000,
                    "planetResource": true
                }
            ]
        },
        "location": [{ "name": "water" }]
    },
    "House": {
        "type": "habitation",
        "svgCode": "M109.902 35.87l-71.14 59.284h142.28l-71.14-59.285zm288 32l-71.14 59.284h142.28l-71.14-59.285zM228.73 84.403l-108.9 90.75h217.8l-108.9-90.75zm-173.828 28.75v62h36.81l73.19-60.992v-1.008h-110zm23 14h16v18h-16v-18zm265 18v10.963l23 19.166v-16.13h16v18h-13.756l.104.087 19.098 15.914h-44.446v14h78v-39h18v39h14v-62h-110zm-194.345 48v20.08l24.095-20.08h-24.095zm28.158 0l105.1 87.582 27.087-22.574v-65.008H176.715zm74.683 14h35.735v34h-35.735v-34zm-76.714 7.74L30.37 335.153H319l-144.314-120.26zm198.046 13.51l-76.857 64.047 32.043 26.704H481.63l-108.9-90.75zm-23.214 108.75l.103.086 19.095 15.914h-72.248v77.467h60.435v-63.466h50v63.467h46v-93.466H349.516zm-278.614 16V476.13h126v-76.976h50v76.977h31.565V353.155H70.902zm30 30h50v50h-50v-50z",
        "constructionCost": [
            {
                "name": "metal",
                "quantity": 100
            }
        ],
        "produce": {
            "product": [
                {
                    "name": "humans",
                    "quantity": 100,
                    "to": "planet"
                },
                {
                    "name": "oxocarbon",
                    "quantity": 500,
                    "to": "planet"
                }
            ],
            "require": [
                {
                    "name": "energy",
                    "quantity": 50,
                    "planetResource": true,
                    "remove": true
                },
                {
                    "name": "metal",
                    "quantity": 100,
                    "planetResource": true,
                    "remove": true
                }
            ],
            "conditions": [
                {
                    "name": "oxygen",
                    "percent": 70,
                    "planetResource": true
                }
            ]
        },
        "location": [{ "name": "ground" }]
    },
    "Floating house": {
        "type": "habitation",
        "svgCode": "M256.1 76.12L93.42 224h23.08L256 99.96 395.5 224h23.1L256.1 76.12zM329 105v13.1l30 27.2V105h-30zm-73 19L137 229.8v117.9c8.5 6.6 16 11.3 23 11.3 2.3 0 4.6-.5 7-1.4V279h66v49.1c11.5 2.8 20.6 10.5 28.6 16.9 10 8 18.5 14 26.4 14 7.9 0 16.4-6 26.4-14s21.6-18 37.6-18c8.9 0 16.4 3.1 23 7.2V229.8L256 124zm-71 173v49.1c.5-.4.9-.7 1.4-1.1 8-6.4 17.1-14.1 28.6-16.9V297h-30zm-89 48c-15.95 0-32.12 9-45.66 17.3C36.8 370.7 26.39 379 26.39 379l11.22 14s9.66-7.7 22.16-15.3C72.26 370 88.1 363 96 363c7.9 0 16.4 6 26.4 14s21.6 18 37.6 18 27.6-10 37.6-18 18.5-14 26.4-14c7.9 0 16.4 6 26.4 14s21.6 18 37.6 18 27.6-10 37.6-18 18.5-14 26.4-14c7.9 0 16.4 6 26.4 14s21.6 18 37.6 18 32.1-9 45.7-17.3c13.5-8.4 23.9-16.7 23.9-16.7l-11.2-14s-9.7 7.7-22.2 15.3C439.8 370 423.9 377 416 377c-7.9 0-16.4-6-26.4-14S368 345 352 345s-27.6 10-37.6 18-18.5 14-26.4 14c-7.9 0-16.4-6-26.4-14S240 345 224 345s-27.6 10-37.6 18-18.5 14-26.4 14c-7.9 0-16.4-6-26.4-14S112 345 96 345zm0 62c-15.96 0-32.13 9-45.68 17.3-13.54 8.4-23.96 16.7-23.96 16.7l11.22 14s9.66-7.7 22.16-15.3C72.25 432 88.09 425 96 425c7.9 0 16.4 6 26.4 14s21.6 18 37.6 18 27.6-10 37.6-18 18.5-14 26.4-14c7.9 0 16.4 6 26.4 14s21.6 18 37.6 18 27.6-10 37.6-18 18.5-14 26.4-14c7.9 0 16.4 6 26.4 14s21.6 18 37.6 18 32.1-9 45.7-17.3c13.5-8.4 23.9-16.7 23.9-16.7l-11.2-14s-9.7 7.7-22.2 15.3C439.8 432 423.9 439 416 439c-7.9 0-16.4-6-26.4-14S368 407 352 407s-27.6 10-37.6 18-18.5 14-26.4 14c-7.9 0-16.4-6-26.4-14S240 407 224 407s-27.6 10-37.6 18-18.5 14-26.4 14c-7.9 0-16.4-6-26.4-14S112 407 96 407z",
        "constructionCost": [
            {
                "name": "metal",
                "quantity": 500
            }
        ],
        "produce": {
            "product": [
                {
                    "name": "humans",
                    "quantity": 50,
                    "to": "planet"
                },
                {
                    "name": "oxocarbon",
                    "quantity": 300,
                    "to": "planet"
                }
            ],
            "require": [
                {
                    "name": "energy",
                    "quantity": 200,
                    "planetResource": true,
                    "remove": true
                },
                {
                    "name": "metal",
                    "quantity": 100,
                    "planetResource": true,
                    "remove": true
                }
            ],
            "conditions": [
                {
                    "name": "oxygen",
                    "percent": 70,
                    "planetResource": true
                }
            ]
        },
        "location": [{ "name": "water" }]
    },
    "Solar plant": {
        "type": "plant",
        "svgCode": "M219.615 401.84h16v88.06h-16v-88.06zm219.94-271.6l21.83-13.18-21.82-13.16 16-19.8-25-4.88 8.25-24.12-25.19 4-.46-25.49-22.28 12.29-9.18-23.8-16.7 19.24-16.78-19.24-9.22 23.8-22.3-12.31-.46 25.49-25.19-4 8.25 24.12-25 4.88 16 19.8-21.83 13.18 21.83 13.14h33.41l29.29 76.34 12-13.76 16.74 19.24 9.17-23.76 22.3 12.31.46-25.49 25.19 4-8.28-24.18 25-4.88zm-254.55 46.31h-91l31 80.85h91zm108.25 0h-91l30.94 80.85h91zm-70.81 97.42h-91l30.94 80.85h91zm108.25 0h-91l30.94 80.85h91zm73.89 111.87h-262.22L50.615 146.2h262.1zm-19.69-15l-43.31-112.87-37.28-97.42H70.785l80.47 210.27h233.68z",
        "constructionCost": [
            {
                "name": "metal",
                "quantity": 100
            }
        ],
        "produce": {
            "product": [
                {
                    "name": "energy",
                    "quantity": 50,
                    "to": "planet"
                }
            ]
        },
        "location": [
            { "name": "ground" },
            { "name": "water" }
        ]
    },
    "Nuclear plant": {
        "type": "plant",
        "svgCode": "M13.447 18l4.826 20.656c17.47 32.683 68.819 20.747 94.545-1.635-14.136 38.399-65.72 49.25-95.964 26.354-.794 11.045 1.01 18.688 4.326 23.547 4.729 6.93 13.658 10.949 30.021 11.203l12.475.193-4.12 11.778c-5.347 15.288-4.928 23.375-1.91 28.478 1.975 3.337 6.034 6.533 12.678 9.545 40.193-8.27 83.572-9.067 121.676-9.119 28.214 0 56.41 1.001 79.78 3.033 23.37 2.032 41.025 4.306 52.245 9.916 10.816 5.781 25.574 5.525 36.207 3.994 9.222-1.415 16.325-4.613 21.387-10.853 3.954-4.874 7.015-12.152 7.9-23.31-33.606 4.231-67.935-8.9-76.294-47.872 40.54 37.963 82.92 42.849 131.005 16.412 11.444-6.49 18.25-14.805 20.485-27.605l1.392-7.975 8.079.543c7.79.524 14.336.366 19.814-.267V18h-21.979c-20.534 43.036-74.988 67.68-115.3 21.922 29.23 13.223 71.841 14.87 94.744-21.922H13.447zm270.645 29.957c-7.744 21.146-22.92 44.73-47.414 51.688-26.23 34.754-92.726 38.651-119.86-17.305 20.443 24.144 61.662 34.958 91.328 17.668-27.204-8.009-48.057-46.875-46.736-47.535 0 2.077 41.737 29.713 57.897 29.654 25.989.029 43.257-14.207 64.785-34.17zM494 72.945c-4.196.368-8.676.507-13.467.412-4.623 14.341-14.644 25.372-27.422 32.62-12.914 7.325-28.605 11.249-45.64 13.244-.675 15.828-4.645 28.298-11.873 37.209-8.483 10.457-20.558 15.453-32.637 17.306-12.578 1.93-25.722.924-37.504-.76a236.7 236.7 0 0 0-4.86 21.258C338.19 192.74 359.193 192 380.23 192c21.401 0 42.782.76 60.555 2.309 16.293 1.419 28.797 2.843 37.914 6.648 5.832-1.888 11.047-3.878 15.301-6.03v-22.613c-24.68 10.243-52.42 3.068-67.861-28.8 16.333 12.485 44.326 23.76 67.861 8.746V72.945zM192 157c-40.75 1.88-77.826-.767-116.965 8.832 28.05 96.266-1.687 216.838-32.195 309.791 11.247 5.175 30.635 10.198 53.91 13.465C124.683 493.008 158.353 495 192 495s67.317-1.992 95.25-5.912c23.275-3.267 42.663-8.29 53.91-13.465-30.508-92.953-60.246-213.525-32.195-309.791-8.367-2.095-22.342-4.439-38.744-5.865C247.59 157.999 219.786 157 192 157zm188.23 53c-20.97 0-41.962.757-58.994 2.24-1.125.098-2.22.207-3.308.317-8.896 79.06 12.998 172.267 37.445 248.76 8.189.323 16.517.501 24.857.501 25.373 0 50.765-1.507 71.762-4.459 16.35-2.298 30.045-5.83 38.403-9.298-22.686-69.604-44.617-159.096-24.422-231.875-6.263-1.396-15.673-2.981-26.748-3.946-17.032-1.483-38.023-2.24-58.995-2.24zm-141.335 28.21c29.289 17.126 45.21 48.33 44.464 80.056l-61.252-6c-.43-7.908-4.625-15.474-11.837-19.84l28.625-54.215zm-92.956 1.12l27.79 52.514a24.504 24.504 0 0 0-9.616 9.347 24.489 24.489 0 0 0-3.258 11.075l-57.384 6c-.42-16.048 3.166-32.448 11.78-47.37 7.723-13.372 18.408-23.987 30.688-31.566zm45.895 64.092c3.515.034 5.522.778 7.762 2.07a16.161 16.161 0 0 1 5.933 22.162 16.144 16.144 0 0 1-22.146 5.934 16.165 16.165 0 0 1-5.947-22.162c2.815-4.876 8.244-7.778 12.794-7.975a30.402 30.402 0 0 1 1.604-.03zm12.478 43.203l31.467 48.578c-13.778 7.362-29.255 11.298-44.92 10.89-14.368-.372-28.682-4.176-42.029-11.782l30.828-47.12c7.95 4.349 17.346 3.852 24.655-.566z",
        "constructionCost": [
            {
                "name": "metal",
                "quantity": 500
            }
        ],
        "produce": {
            "product": [
                {
                    "name": "energy",
                    "quantity": 200,
                    "to": "planet"
                }
            ],
            "require": [
                {
                    "name": "fissile material",
                    "quantity": "300"
                }
            ]
        },
        "location": [{ "name": "ground" }]
    },
    "CO2 epuration": {
        "type": "epurateur",
        "svgCode": "M173.015 22.936L23 188.546V489h466V188.844L356.326 23c-61.101-.336-122.211.492-183.31-.064zM196.207 41h71.467l113.601 142h-57.267zm94.52 0h56.947l113.601 142h-56.95zM176 45.455l135 149.998V471H41V195.453zm46.676 104.662c-28.028 1.213-50.09 13.314-66.613 29.309-19.1 18.49-30.514 42.355-33.84 59.283-7.239 36.843 9.808 61.862 31.07 70.447.02-.202.049-.176.002-.24-7.507-38.847 4.114-75.91 28.72-100.455-18.585 28.567-20.994 70.834-9.7 103.953a38.802 38.802 0 0 0 13.834-3.451c10.316-4.728 19.615-14.342 25.414-30.531 6.178-17.248.883-45.042-1.242-71.45-1.062-13.203-1.264-26.148 1.892-37.703 1.944-7.113 5.327-13.7 10.463-19.162zM329 201h62v110h-62zm80 0h62v110h-62zM78.174 243.512c-15.848 17.804-21.765 38.434-22.088 58.12-.38 23.193 7.323 44.995 15.678 57.44 18.033 26.86 43.723 31.7 61.941 24.3-28.494-19.45-44.12-49.495-44.082-79.847 6.147 29.067 30.586 56.61 57.916 70.24a33.509 33.509 0 0 0 6.424-10.67c3.408-9.175 3.24-20.71-3.149-34.238-6.745-14.28-27.202-28.267-44.939-43.365-8.869-7.55-17.058-15.495-22.326-24.726-3.013-5.281-4.947-11.098-5.375-17.254zm216.205 37.386c-3.45 5.122-8.026 9.207-13.28 12.276-9.176 5.36-20.237 8.138-31.69 10.24-22.91 4.206-47.61 6.085-60.589 15.076-12.295 8.52-18.226 18.434-19.861 28.084a33.488 33.488 0 0 0 .238 12.45c30.484 1.864 65.412-9.769 85.268-31.868-15.136 26.304-43.686 44.509-78.08 47.104 12.078 15.52 36.73 24.18 65.771 9.937 13.456-6.598 31.037-21.629 42.301-41.902 9.562-17.212 14.747-38.051 9.922-61.397zM329 329h62v142h-62zm80 0h62v142h-62zm-257.033 58.621c-3.298 23.051 5.13 45.02 5.135 61.172l18-.006c-.006-21.306-7.68-42.102-5.317-58.615-4.348-6.181-9.231-7.098-17.818-2.55z",
        "constructionCost": [
            {
                "name": "metal",
                "quantity": 50
            }
        ],
        "produce": {
            "product": [
                {
                    "name": "oxygen",
                    "quantity": 300,
                    "to": "planet"
                }
            ],
            "require": [
                {
                    "name": "energy",
                    "quantity": 50,
                    "planetResource": true
                },
                {
                    "name": "oxocarbon",
                    "quantity": 50,
                    "planetResource": true
                }
            ]
        },
        "location": [
            { "name": "ground" },
            { "name": "water" }
        ]
    },
    "Crops farm": {
        "type": "farm",
        "svgCode": "M256 23.38L89.844 89.845l-64.9 162.254 14.85 5.943c20.312-50.766 40.62-101.535 60.93-152.304l1.432-3.58L256 40.616l153.844 61.54 1.43 3.58 60.93 152.305 14.853-5.942-64.9-162.254C366.77 67.69 311.386 45.534 256 23.38zm0 36.624l-139.996 55.998L72.8 224h.2v263h78V329h-39v-18h297v176h30V224h.2c-14.402-36-28.802-72-43.204-107.998L256 60.004zM151 135h210v114H151V135zm23.563 18L199 201.873V153h-24.438zM313 153v48.873L337.438 153H313zm-144 29.127V231h24.438L169 182.127zm174 0L318.562 231H343v-48.873zm-98.73 18.69c-1.207-.02-2.31.02-3.288.128-2.823.31-10.76 3.708-16.86 7.3-2.796 1.645-5.23 3.22-7.122 4.484V231h78v-16.97c-4.193-1.675-10.334-4.02-17.578-6.368-11.206-3.63-24.71-6.71-33.152-6.846zM160 263h192v18H160v-18zm15.16 66L208 389.205 240.84 329h-65.68zm144 0L352 389.205 384.84 329h-65.68zM169 355.295v105.41L197.748 408 169 355.295zm78 0L218.252 408 247 460.705v-105.41zm66 0v105.41L341.748 408 313 355.295zm78 0L362.252 408 391 460.705v-105.41zm-183 71.5L175.16 487h65.68L208 426.795zm144 0L319.16 487h65.68L352 426.795z",
        "constructionCost": [
            {
                "name": "metal",
                "quantity": 50
            }
        ],
        "produce": {
            "product": [
                {
                    "name": "plants",
                    "quantity": 100,
                    "to": "planet"
                },
                {
                    "name": "oxygen",
                    "quantity": 300,
                    "to": "planet"
                }
            ],
            "require": [
                {
                    "name": "energy",
                    "quantity": 50,
                    "planetResource": true
                },
                {
                    "name": "oxocarbon",
                    "quantity": 10,
                    "planetResource": true
                }
            ]
        },
        "location": [{ "name": "ground" }]
    },
    "Colonization shuttle": {
        "type": "ship",
        "svgCode": "",
        "constructionCost": [
            {
                "name": "metal",
                "quantity": 50
            }
        ],
        "produce": {
            "product": [
                {
                    "name": "ship",
                    "quantity": 0
                }
            ],
            "require": [
            ]
        },
        "location": [{ "name": "ground" }]
    }
};
