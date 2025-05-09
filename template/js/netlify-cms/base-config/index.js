import getSections from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/sections'
import getSettings from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/settings'
import getLayout from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/layout'
import getPages from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/pages'
import getBlogPosts from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/blog-posts'
import getExtraPages from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/extra-pages'
import getWidgets from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/widgets'

//ALPIX CUSTOM MODULES
//import getReceitas from './collections/receitas-posts'
//import getGrids from './collections/grids'
//import getMenuConfig from './collections/menu-config'
const animations = [
  "backInDown",
  "backInLeft",
  "backInRight",
  "backInUp",
  "bounceIn",
  "bounceInDown",
  "bounceInLeft",
  "bounceInRight",
  "bounceInUp",
  "fadeIn",
  "fadeInDown",
  "fadeInDownBig",
  "fadeInLeft",
  "fadeInLeftBig",
  "fadeInRight",
  "fadeInRightBig",
  "fadeInUp",
  "fadeInUpBig",
  "fadeInTopLeft",
  "fadeInTopRight",
  "fadeInBottomLeft",
  "fadeInBottomRight",
  "lightSpeedInRight",
  "lightSpeedInLeft",
  "lightSpeedOutRight",
  "lightSpeedOutLeft",
  "rotateIn",
  "rotateInDownLeft",
  "rotateInDownRight",
  "rotateInUpLeft",
  "rotateInUpRight",
  "zoomIn",
  "zoomInDown",
  "zoomInLeft",
  "zoomInRight",
  "zoomInUp",
  "slideInDown",
  "slideInLeft",
  "slideInRight",
  "slideInUp"
]

const spacer = [
  {
    label: 'Margem Superior',
    required: true,
    name: 'margin_top',
    widget: 'select',
    required: false,
    options: ["0","1","2","3","4","5"]
  },  
  {
    label: 'Margem Inferior',
    required: true,
    name: 'margin_bottom',
    widget: 'select',
    required: false,
    options: ["0","1","2","3","4","5"]
  },  
  {
    label: 'Espaçamento Superior',
    required: true,
    name: 'padding_top',
    widget: 'select',
    required: false,
    options: ["0","1","2","3","4","5"]
  },  
  {
    label: 'Espaçamento Inferior',
    required: true,
    name: 'padding_bottom',
    widget: 'select',
    required: false,
    options: ["0","1","2","3","4","5"]
  },
  {
    label: 'Margem Superior [Mobile]',
    required: true,
    name: 'margin_top_m',
    widget: 'select',
    required: false,
    options: ["0","1","2","3","4","5"]
  },  
  {
    label: 'Margem Inferior [Mobile]',
    required: true,
    name: 'margin_bottom_m',
    widget: 'select',
    required: false,
    options: ["0","1","2","3","4","5"]
  },  
  {
    label: 'Espaçamento Superior [Mobile]',
    required: true,
    name: 'padding_top_m',
    widget: 'select',
    required: false,
    options: ["0","1","2","3","4","5"]
  },  
  {
    label: 'Espaçamento Inferior [Mobile]',
    required: true,
    name: 'padding_bottom_m',
    widget: 'select',
    required: false,
    options: ["0","1","2","3","4","5"]
  }
]
const bannerFields = [
  {
    label: 'Imagem',
    name: 'img',
    widget: 'image'
  },
  {
    label: 'Link',
    required: false,
    name: 'link',
    widget: 'string'
  },
  {
    label: 'Alt',
    required: false,
    name: 'alt',
    widget: 'string'
  },
  {
    label: 'Imagem para mobile',
    required: false,
    name: 'mobile_img',
    widget: 'image'
  },
  {
    label: 'Título',
    required: false,
    name: 'title',
    widget: 'string'
  },
  {
    label: 'Descrição',
    required: false,
    name: 'description',
    widget: 'string'
  },
  {
    label: 'Posição do conteúdo',
    required: true,
    name: 'content_position',
    widget: 'select',
    options: ["top_left","top_center","top_right","center_left","center_center","center_right","bottom_left","bottom_center","bottom_right"]
  },
  {
    label: 'Ordem de conteúdo',
    required: true,
    name: 'content_order',
    widget: 'select',
    options: ["before_image","inside_image","after_image","left_image","right_image"]
  },  
  {
    label: 'Animação',
    required: false,
    name: 'animate',
    widget: 'select',
    options: animations
  },
  {
    label: 'Texto do botão [Principal]',
    required: false,
    name: 'btn_text',
    widget: 'string'
  },
  {
    label: 'Cor do texto do botão [Principal]',
    required: false,
    name: 'btn_text_color',
    widget: 'color'
  },
  
  {
    label: 'URL do botão [Principal]',
    required: false,
    name: 'btn_url',
    widget: 'string'
  },
  {
    label: 'Texto do botão [Secundário]',
    required: false,
    name: 'btn_text_2',
    widget: 'string'
  },
  
  {
    label: 'URL do botão [Secundário]',
    required: false,
    name: 'btn_url_2',
    widget: 'string'
  },
  {
    label: 'Texto do link',
    required: false,
    name: 'link_text',
    widget: 'string'
  },
  {
    label: 'URL do link',
    required: false,
    name: 'link_url',
    widget: 'string'
  },
  {
    label: 'Cor do título',
    required: false,
    name: 'title_color',
    widget: 'color'
  },
  {
    label: 'Cor da descrição',
    required: false,
    name: 'description_color',
    widget: 'color'
  },
  {
    label: 'Cor da Máscara',
    required: false,
    name: 'mask_color',
    widget: 'color'
  },
  {
    label: 'Transparência da Máscara',
    name: 'mask_opacity',
    hint: 'De 0 até 10. 0 é transparente e 10 é totalmente opaco.',
    min: 0,
    max:10,
    default:0,    
    widget: 'number'
  },
  {
    label: 'Fundo do botão [Principal]',
    required: false,
    name: 'btn_background',
    widget: 'color'
  },
  {
    label: 'Cor do texto do botão [Secundário]',
    required: false,
    name: 'btn_text_color_2',
    widget: 'color'
  },
  {
    label: 'Fundo do botão [Secundário]',
    required: false,
    name: 'btn_background_2',
    widget: 'color'
  },
  {
    label: 'Cor do texto do link',
    required: false,
    name: 'link_text_color',
    widget: 'color'
  },
  {
    label: 'Cor do título [Mobile]',
    required: false,
    name: 'title_color_m',
    widget: 'color'
  },
  {
    label: 'Cor da descrição [Mobile]',
    required: false,
    name: 'description_color_m',
    widget: 'color'
  },
  {
    label: 'Cor da Máscara [Mobile]',
    required: false,
    name: 'mask_color_m',
    widget: 'color'
  },
  {
    label: 'Transparência da Máscara [Mobile]',
    name: 'mask_opacity_m',
    hint: 'De 0 até 10. 0 é transparente e 10 é totalmente opaco.',
    min: 0,
    max:10,
    default:0,    
    widget: 'number'
  },
  {
    label: 'Fundo do botão [Principal] [Mobile]',
    required: false,
    name: 'btn_background_m',
    widget: 'color'
  },
  {
    label: 'Cor do texto do botão [Secundário] [Mobile]',
    required: false,
    name: 'btn_text_color_2_m',
    widget: 'color'
  },
  {
    label: 'Fundo do botão [Secundário] [Mobile]',
    required: false,
    name: 'btn_background_2_m',
    widget: 'color'
  },
  {
    label: 'Cor do texto do link [Mobile]',
    required: false,
    name: 'link_text_color_m',
    widget: 'color'
  }
]


export default (options,state) => {
  console.log('cms',options, state)
  options.sections = getSections(options).concat([
    {
      label: '[ALPIX] - Banner responsivo',
      name: 'apx_responsive-banner',
      widget: 'object',
      fields: [
        {
          label: 'Container',
          required: true,
          name: 'container',
          widget: 'select',
          options: ["container","container-fluid","container_90"]
        },  
        {
          label: 'Espaçamento',
          required: true,
          name: 'padding',
          widget: 'select',
          options: ["px-0","px-1","px-2","px-3","px-4","px-5"]
        }, 
        ...bannerFields,...spacer]
    },
    {
      label: '[ALPIX] - Sessão CTA',
      name: 'apx_cta',
      widget: 'object',
      fields: [
        {
          label: 'Título',
          required: false,
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Cor do título',
          required: false,
          name: 'title_color',
          widget: 'color'
        },
        {
          label: 'Descrição',
          required: false,
          name: 'description',
          widget: 'string'
        },
        {
          label: 'Cor da descrição',
          required: false,
          name: 'description_color',
          widget: 'color'
        },        
        {
          label: 'Animação',
          required: false,
          name: 'animate',
          widget: 'select',
          options: animations
        },
        {
          label: 'Texto do botão [Principal]',
          required: false,
          name: 'btn_text',
          widget: 'string'
        },
        {
          label: 'Cor do texto do botão [Principal]',
          required: false,
          name: 'btn_text_color',
          widget: 'color'
        },
        {
          label: 'Fundo do botão [Principal]',
          required: false,
          name: 'btn_background',
          widget: 'color'
        },
        {
          label: 'URL do botão [Principal]',
          required: false,
          name: 'btn_url',
          widget: 'string'
        },
        {
          label: 'Texto do botão [Secundário]',
          required: false,
          name: 'btn_text_2',
          widget: 'string'
        },
        {
          label: 'Cor do texto do botão [Secundário]',
          required: false,
          name: 'btn_text_color_2',
          widget: 'color'
        },
        {
          label: 'Fundo do botão [Secundário]',
          required: false,
          name: 'btn_background_2',
          widget: 'color'
        },
        {
          label: 'URL do botão [Secundário]',
          required: false,
          name: 'btn_url_2',
          widget: 'string'
        },
        {
          label: 'Texto do link',
          required: false,
          name: 'link_text',
          widget: 'string'
        },
        {
          label: 'Cor do texto do link',
          required: false,
          name: 'link_text_color',
          widget: 'color'
        },
        {
          label: 'URL do link',
          required: false,
          name: 'link_url',
          widget: 'string'
        },
        {
          label: 'Fundo da sessão',
          required: false,
          name: 'background',
          widget: 'color'
        },
        ...spacer,

      ]
    },
    {
      label: '[ALPIX] - Grid de banners',
      name: 'apx_banners-grid',
      widget: 'object',
      fields: [
        {
          label: 'Container',
          required: true,
          name: 'container',
          widget: 'select',
          options: ["container","container-fluid","container_90"]
        },  
        {
          label: 'Espaçamento',
          required: true,
          name: 'padding',
          widget: 'select',
          options: ["px-0","px-1","px-2","px-3","px-4","px-5"]
        }, 
        ...spacer, 
        {
          label: 'Banners',
          name: 'banners',
          widget: 'list',
          fields: bannerFields
        }
      ]
    },
    {
      label: '[ALPIX] - Slider de banners',
      name: 'apx_banner-slider',
      widget: 'object',
      fields: [
        {
          label: 'Slides',
          name: 'slides',
          widget: 'list',
          fields: bannerFields.concat([
            {
              label: 'Data de início',
              required: false,
              name: 'start',
              widget: 'datetime',
              dateFormat: 'DD/MM/YYYY',
              timeFormat: 'HH:mm'
            },
            {
              label: 'Data de encerramento',
              required: false,
              name: 'end',
              widget: 'datetime',
              dateFormat: 'DD/MM/YYYY',
              timeFormat: 'HH:mm'
            }
          ])
        },
        {
          label: 'Slider autoplay',
          name: 'autoplay',
          hint: 'Exibição de cada slide em milisegundos, defina 0 para desabilitar autoplay',
          min: 0,
          step: 1000,
          default: 9000,
          widget: 'number'
        },
        ...spacer
      ]
    },
    // {
    //   label: '[ALPIX] - Depoimentos',
    //   name: 'apx_testimonials',
    //   widget: 'object',
    //   fields: [
    //     {
    //       label: 'Título',
    //       required: false,
    //       name: 'title',
    //       widget: 'string'
    //     },
    //     {
    //       label: 'Descrição',
    //       required: false,
    //       name: 'description',
    //       widget: 'text'
    //     },
    //     {
    //       label: 'Depoimentos',
    //       name: 'testimonials',
    //       widget: 'list',
    //       required:false,
    //       fields: [
    //         {
    //           label: 'Depoimento',
    //           name: 'testimonial',
    //           widget: 'object',
    //           required:false,
    //           fields: [
    //             {
    //               label: 'Nome do Cliente',
    //               name: 'name',
    //               widget: 'string'          
    //             },
    //             {
    //               label: 'Depoimento',
    //               name: 'text',
    //               widget: 'string'          
    //             },
    //             {
    //               label: 'Foto do Cliente',
    //               name: 'image',
    //               widget: 'image'          
    //             },                
    //           ]
    //         },          
    //       ]
    //     },        
    //   ]
    // },
    // {
    //   label: '[ALPIX] - FAQ',
    //   name: 'apx_faq',
    //   widget: 'object',
    //   fields: [
    //     {
    //       label: 'Título',
    //       required: false,
    //       name: 'title',
    //       widget: 'string'
    //     },
    //     {
    //       label: 'Descrição',
    //       required: false,
    //       name: 'description',
    //       widget: 'text'
    //     },
    //     {
    //       label: 'Posição da descrição',
    //       required: false,
    //       name: 'list',
    //       widget: 'select',
    //       options: ["description_first","description_last"]
    //     },        
    //     {
    //       label: 'Perguntas',
    //       name: 'questions',
    //       widget: 'list',
    //       required:false,
    //       fields: [
    //         {
    //           label: 'Pergunta',
    //           name: 'question',
    //           widget: 'object',
    //           required:false,
    //           fields: [
    //             {
    //               label: 'Pergunta',
    //               name: 'title',
    //               widget: 'string'          
    //             },
    //             {
    //               label: 'Resposta',
    //               name: 'response',
    //               widget: 'string'          
    //             }              
    //           ]
    //         },          
    //       ]
    //     },        
    //   ]
    // },
    // {
    //   label: '[ALPIX] - Newsletter',
    //   name: 'apx_newsletter',
    //   widget: 'object',
    //   fields: [
    //     {
    //       label: 'Título',
    //       required: false,
    //       name: 'title',
    //       widget: 'string'
    //     },
    //     {
    //       label: 'Descrição',
    //       required: false,
    //       name: 'description',
    //       widget: 'text'
    //     },
    //     {
    //       label: 'Posição da descrição',
    //       required: false,
    //       name: 'list',
    //       widget: 'select',
    //       options: ["description_first","description_last"]
    //     },        
    //     {
    //       label: 'Texto do botão',
    //       required: false,
    //       name: 'btn_text',
    //       widget: 'text'
    //     },  
    //     {
    //       label: 'Placeholder do campo',
    //       required: false,
    //       name: 'input_placeholder',
    //       widget: 'text'
    //     }  
    //   ]
    // },
    {
      label: '[ALPIX] - Lista de Produtos',
      name: 'apx_productList_A',
      widget: 'object',
      fields: [
        {
          label: 'Produtos',
          name: 'products',
          widget: 'list',
          field: {
            label: 'SKU do produto',
            name: 'product_id',
            widget: 'select',
            options: options.state.routes
              .filter(({ sku }) => typeof sku === 'string')
              .map(({ _id, sku }) => ({
                label: sku,
                value: _id
              }))
          }
        },
        {
          label: 'Imagem de Fundo (Título)',
          name: 'bg_img',
          widget: 'image'
        },
        {
          label: 'Imagem de Fundo (Título) [Mobile]',
          required: false,
          name: 'bg_img_mobile',
          widget: 'image'
        },
        {
          label: 'Título',
          required: false,
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Descrição',
          required: false,
          name: 'description',
          widget: 'text'
        },
        {
          label: 'Posição da descrição',
          required: false,
          name: 'list',
          widget: 'select',
          options: ["description_first","description_last"]
        },
        {
          label: 'Produtos por linha no mobile',
          required: true,
          name: 'num_col_sm',
          widget: 'select',
          options: ["1","2"]
        },
        {
          label: 'Container',
          required: true,
          name: 'container',
          widget: 'select',
          options: ["container","container-fluid","container_90"]
        },  
        {
          label: 'Espaçamento',
          required: true,
          name: 'padding',
          widget: 'select',
          options: ["px-md-0","px-md-1","px-md-2","px-md-3","px-md-4","px-md-5"]
        },  
        {
          label: 'Espaçamento Mobile',
          required: true,
          name: 'padding_sm',
          widget: 'select',
          options: ["px-0","px-1","px-2","px-3","px-4","px-5"]
        },          
        {
          label: 'Carrossel Mobile?',
          required: true,
          name: 'carrossel_sm',
          widget: 'select',
          options: ["Sim","Não"]
        },        
        {
          label: 'Produtos por linha no desktop',
          required: true,
          name: 'num_col_md',
          widget: 'select',
          options: ["2","3","4","5"]
        },
        {
          label: 'Carrossel Desktop?',
          required: true,
          name: 'carrossel_md',
          widget: 'select',
          options: ["Sim","Não"]
        },
        {
          label: 'Exibir dots do carrossel desktop?',
          required: true,
          name: 'carrossel_dots_md',
          widget: 'select',
          options: ["Sim","Não"]
        },
        {
          label: 'Exibir dots do carrossel mobile?',
          required: true,
          name: 'carrossel_dots_sm',
          widget: 'select',
          options: ["Sim","Não"]
        },
        {
          label: 'Exibir setas do carrossel desktop?',
          required: true,
          name: 'carrossel_arrows_md',
          widget: 'select',
          options: ["Sim","Não"]
        },
        {
          label: 'Exibir setas do carrossel mobile?',
          required: true,
          name: 'carrossel_arrows_sm',
          widget: 'select',
          options: ["Sim","Não"]
        },
        {
          label: 'Texto do Botão',
          required: false,
          name: 'btn_text',
          widget: 'string'
        },
        {
          label: 'Link do Botão',
          required: false,
          name: 'btn_link',
          widget: 'string'
        },
        ...spacer
      ]
    },
    {
      label: '[ALPIX] - HTML por Categoria (Apenas para Produto)',
      name: 'apx_blockPerCategory',
      widget: 'object',
      fields: [
        {
          label: 'Título (Apenas identificação)',
          required: false,
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Gatilho - Nome da Categoria (Case Sensisitive)',
          required: false,
          name: 'slug',
          widget: 'string'
        },
        {
          label: 'Lista de Conteúdo',
          name: 'list',
          widget: 'list',
          required:false,
          fields: [
            {
              label: 'Conteúdo',
              name: 'content',
              widget: 'object',
              required:false,
              fields: [
                {
                  label: 'Título',
                  name: 'title',
                  widget: 'string',
                  required:false,
                },
                {
                  label: 'Subtítulo',
                  name: 'subtitle',
                  widget: 'string',
                  required:false,          
                },
                {
                  label: 'Posicionamento da Imagem',
                  name:"image_position",
                  widget: 'select',
                  options: ["first","last"]        
                },
                {
                  label: 'Alinhamento do Texto',
                  widget: 'select',
                  name:"text_align",
                  options: ["left","right","justify","center"]        
                },
                {
                  label: 'Texto',
                  name: 'body',
                  widget: 'markdown'          
                },
                {
                  label: 'Imagem',
                  name: 'image',
                  widget: 'image',
                  required:false,          
                },                
              ]
            },          
          ]
        },
        ...spacer        
      ]
    }
])

  return {
    backend: {
      name: 'git-gateway',
      branch: 'master',
      commit_messages: {
        create: 'Create {{collection}} “{{slug}}”',
        update: 'Update {{collection}} “{{slug}}”',
        delete: 'Delete {{collection}} “{{slug}}”',
        uploadMedia: 'Upload “{{path}}”',
        deleteMedia: '[skip ci] Delete “{{path}}”',
        openAuthoring: '{{message}}'
      }
    },
    logo_url: 'https://ecom.nyc3.digitaloceanspaces.com/storefront/cms.png',
    locale: 'pt',
    load_config_file: Boolean(window.CMS_LOAD_CONFIG_FILE),
    media_folder: `${options.baseDir}template/public/img/uploads`,
    public_folder: '/img/uploads',
    slug: {
      encoding: 'ascii',
      clean_accents: true,
      sanitize_replacement: '-'
    },
    collections: [
      getSettings(options),
      getLayout(options),
      getPages(options),
      getBlogPosts(options),
      //getReceitas(options),
      //getGrids(options),
      //getMenuConfig(options),
      getExtraPages(options),
      getWidgets(options),
      {
        name: 'apx_tags',        
        label: '[alpix.dev] - Produtos - Tags ',
        description: 'Adicione tags ou selos nos produtos',
        folder: `${options.baseDir}content/apx_tags`,
        extension: 'json',
        create: true,
        slug: '{{slug}}',
        fields: [
          {
            label: 'Identificador [SKU] ou [Categoria]',
            name: 'identificador',
            widget: 'select',
                multiple: true,
                options: [
                  ...options.state.routes
                  .filter(({ sku }) => typeof sku === 'string')
                  .map(({ sku }) => ({
                    label: 'Produto - ' + sku,
                    value: sku
                  })),
                  ...options.state.routes
                  .filter(el => el.resource === 'categories')
                  .map((el) => ({
                    label: 'Categoria - ' + el.name,
                    value: 'cat_'+el._id
                  }))
                ]                
          },
          {
            label: "Posição na lista",
            name:"type",
            widget: "select",
            options: ["top_left","top_center","bottom_left","bottom_center","bottom_right"],
            required:false, 
          }, 
          {
            label: "Nome da Característica",
            hint:"Exatamente como cadastrado no painel E-com.plus",
            name: "title",
            widget: "string"          
          }, 
          {
            label: "Descrição",
            name: "description",
            widget: "string",
            required:false,          
          }, 
          {
            label: 'Imagem ou ícone',
            name: 'img',
            widget: 'image',
            required:false,
          },   
          {
            label: 'Cor do texto',
            required: false,
            name: 'color',
            widget: 'color'
          },
          {
            label: 'Cor da borda',
            required: false,
            name: 'border',
            widget: 'color'
          },
          {
            label: 'Cor do fundo',
            required: false,
            name: 'background_color',
            widget: 'color'
          }
        ]
      },
      {
        name: 'apx_properties',        
        label: '[alpix.dev] - Características',
        description: 'Adicione imagens, ícones e/ou descrições nos filtros de características',
        folder: `${options.baseDir}content/apx_properties`,
        extension: 'json',
        create: true,
        slug: '{{slug}}',
        fields: [
          {
            label: "Nome da Característica",
            hint:"Exatamente como cadastrado no painel E-com.plus",
            name: "title",
            widget: "string"          
          }, 
          {
            label: "Descrição",
            name: "description",
            widget: "string",
            required:false,          
          }, 
          {
            label: 'Imagem ou ícone',
            name: 'img',
            widget: 'image',
            required:false,
          },   
          {
            label: 'Cor 1',
            name: 'color_1',
            widget: 'color',
            required:false,
          },   
          {
            label: 'Cor 2',
            name: 'color_2',
            widget: 'color',
            required:false,
          },   
          {
            label: 'Cor 3',
            name: 'color_3',
            widget: 'color',
            required:false,
          },   
        ]
      },
      {
        name: 'apx_products_content',        
        label: '[alpix.dev] - Produtos - Abas de Conteúdo',
        description: '',
        folder: `${options.baseDir}content/apx_products_content`,
        extension: 'json',
        create: true,
        slug: '{{slug}}',
        fields: [
          {
            label: "Título do Registro",
            hint:"Campo apenas informativo.",
            name: "title",
            widget: "string"          
          }, 
          {
            label: 'Identificador [SKU] [Categoria] ou [default]',
            name: 'identificador',
            widget: 'select',
                multiple: true,
                options: [
                  {label: 'Default / Padrão / Todos os Produtos',
                value: 'default'},
                  ...options.state.routes
                  .filter(({ sku }) => typeof sku === 'string')
                  .map(({ sku }) => ({
                    label: 'Produto - ' + sku,
                    value: sku
                  })),
                  ...options.state.routes
                  .filter(el => el.resource === 'categories')
                  .map((el) => ({
                    label: 'Categoria - ' + el.name,
                    value: 'cat_'+el._id
                  }))
                ]                
          }, 
          {
            label:"Abas de Conteúdo",
            name:"list",
            widget:"list",
            required:false,
            fields: [
              {
                label: "Título",
                name: "title",
                widget: "string"          
              }, 
              {
                label: "Conteúdo",
                name: "content",
                widget: "markdown",
                required:false,          
              }              
            ]
          },
        ]
      },
      {
        name: 'apx_products',        
        label: '[alpix.dev] - Produtos - Personalização e Upselling',
        description: 'Configure as opções disponíveis para personalização e sugestões de produtos.',
        folder: `${options.baseDir}content/apx_products`,
        extension: 'json',
        create: true,
        slug: '{{slug}}',
        fields: [
          {
            label: "Título do Registro",
            hint:"Campo apenas informativo.",
            name: "title",
            widget: "string"          
          }, 
          {
            label: 'Identificador [SKU] [Categoria] ou [default]',
            name: 'identificador',
            widget: 'select',
                multiple: true,
                options: [
                  ...options.state.routes
                  .filter(({ sku }) => typeof sku === 'string')
                  .map(({ sku }) => ({
                    label: 'Produto - ' + sku,
                    value: sku
                  })),
                  ...options.state.routes
                  .filter(el => el.resource === 'categories')
                  .map((el) => ({
                    label: 'Categoria - ' + el.name,
                    value: 'cat_'+el._id
                  }))
                ]                
          },              
          {
            label:"Personalização",
            name:"customizations",
            hint:"Lembre-se que o grid deverá estar atribuido ao produto no painel app.e-com.plus para que a personalização funcione.",
            widget:"list",
            required:false,
            fields: [
              
              {
                label: "Título do Passo",
                hint:"Digite o que deve ser exibido como título. Exemplo: Selecione o grau da sua lente",
                name: "title",
                widget: "string",
                required:false,          
              }, 
              {
                label: 'Grid da Personalização',
                name: 'title_id',
                widget: 'select',
                hint:"Lembre-se que o grid deverá estar atribuido ao produto no painel app.e-com.plus para que a personalização funcione. Personalizações do tipo texto/gravação devem ter somente uma opção cadastrada por bloco",
                options: window.storefront.data.grids
                  .map(({ grid_id, title }) => ({
                    label: title,
                    value: grid_id
                  }))
              },  
              {
                label: "Descrição do Passo",
                hint:"Digite o que deve ser exibido como descrição. Exemplo: Selecione uma das opções de lentes disponíveis abaixo. Cada uma tem uma necessidade específica...",
                name: "step_description",
                widget: "string",
                required:false,          
              }, 
              
              {
                label: 'Upload',
                hint:"",
                name: 'upload',
                widget: 'object',
                fields: [
                  {
                    label: "Exibir campo para upload de arquivo?",
                    name:"enable",
                    widget: 'boolean',
                    default: false,
                    required:false,     
                  },
                  {
                    label: "Título",
                    hint:"",
                    name: "title",
                    widget: "string",
                    required:false,          
                  }, 
                  {
                    label: "Descrição",
                    hint:"",
                    name: "description",
                    widget: "string",
                    required:false,          
                  }, 
                  {
                    label: 'Imagem ou ícone',
                    name: 'img',
                    widget: 'image',
                    required:false,
                  },  
                  {
                    label: "Observação",
                    hint:"",
                    name: "description_after",
                    widget: "string",
                    required:false,          
                  }, 
                  {
                    label: "Texto do botão",
                    hint:"",
                    name: "button_text",
                    widget: "string",
                    required:false,          
                  }, 
                ]
              },
              {
                label: 'Condições',
                hint:"Caso queira que essa grade apareça com uma condição específica, escolha a grade anterior abaixo",
                name: 'conditions',
                widget: 'list',
                fields: [
                  {
                    label: 'Condições',
                    hint:"Caso queira que essa grade apareça com uma condição específica, escolha a grade anterior abaixo",
                    name: 'condition',
                    widget: 'object',
                    fields: [
                      {
                        label: 'Exibir quando a opção da grade...',
                        required:false,
                        name: 'condition_grid',
                        widget: 'select',
                        options: [{label:"Sem condição", value:"empty"}, ...window.storefront.data.grids
                        .map(({ grid_id, title }) => ({
                          label: title,
                          value: grid_id
                        }))]
                      },  
                      {
                        label: "Tiver o valor",
                        name:"condition_type",
                        hint:">, <, >= e <= devem ser utilizados especificamente para valores numéricos.",
                        widget: "select",
                        options: ["=",">","<",">=","<=","!="],
                        required:false, 
                      },
                      {
                        label: "De",
                        hint:"Digite o valor que deverá ser comparado",
                        name: "condition_value",
                        widget: "string",
                        required:false,          
                      }, 
                    ]
                  },
                ]
              },
              {
                label:"Opções",
                name:"list",
                widget:"list",
                required:false,
                fields: [
                  {
                    label: "Nome da opção",
                    name: "title",
                    widget: "string"          
                  }, 
                  {
                    label: "Descrição",
                    name: "description",
                    widget: "string",
                    required:false,          
                  }, 
                  {
                    label: 'Imagem ou ícone',
                    name: 'img',
                    widget: 'image',
                    required:false,
                  },     
                  {
                    label: "Tipo de Custo",
                    name:"type",
                    widget: "select",
                    options: ["Fixo","%"],
                    required:false, 
                  },
                  {
                    label: "Valor (Percentual ou Fixo em R$)",
                    name: "value",
                    widget: "number",
                    min:0,
                    value_type:"float",
                    required:false,
                  },
                  {
                    label: "Exibir campo digitável?",
                    name:"input_type",
                    widget: "select",
                    options: ["Não","text","number"],
                    required:false, 
                  },
                  {
                    label: "Quantidade máxima de caracteres ou de valor númerico",
                    name: "input_type_max",
                    widget: "number",
                    min:0,
                    value_type:"float",
                    required:false,
                  },
                  {
                    label: "Campo digitável é obrigatório?",
                    name:"input_type_required",
                    widget: 'boolean',
                    default: false
                  },
                ]
              }, 
            ]
          },
          {
            label:"Upselling",
            name:"upselling",
            widget:"list",
            required:false,
            fields: [
              {
                label: "Título do Passo",
                hint:"Digite o que deve ser exibido como título. Exemplo: Selecione o grau da sua lente",
                name: "step_title",
                widget: "string",
                required:false,          
              }, 
              {
                label: "Descrição do Passo",
                hint:"Digite o que deve ser exibido como descrição. Exemplo: Selecione uma das opções de lentes disponíveis abaixo. Cada uma tem uma necessidade específica...",
                name: "step_description",
                widget: "string",
                required:false,          
              }, 
              {
                label: 'Produtos',
                hint:"Exiba opções de produtos para adicionar juntamente ao carrinho na finalização da personalização. Os itens de customização serão aplicados ao produto de upselling. Somente uma das opções poderá ser escolhida, então caso tenha por exemplo um Estojo, selecione as variações do estojo para exibição.",
                name: 'upselling_skus',
                required: false,
                widget: 'select',
                multiple: true,
                options: options.state.routes
                  .filter(({ sku }) => typeof sku === 'string')
                  .map(({ sku }) => ({
                    label: sku,
                    value: sku
                  }))
              }, 
              {
                label:"Personalização",
                name:"customizations",
                widget:"list",
                required:false,
                fields: [
                  {
                    label: 'Grid da Personalização',
                    hint:"Utilizar somente campos do tipo Gravação",
                    name: 'title',
                    widget: 'select',
                    options: window.storefront.data.grids
                    .map(({ grid_id, title }) => ({
                      label: title,
                      value: grid_id
                    }))
                  },  
                  {
                    label: "Título do Passo",
                    hint:"Digite o que deve ser exibido como título. Exemplo: Selecione o grau da sua lente",
                    name: "step_title",
                    widget: "string",
                    required:false,          
                  }, 
                  {
                    label: "Descrição do Passo",
                    hint:"Digite o que deve ser exibido como descrição. Exemplo: Selecione uma das opções de lentes disponíveis abaixo. Cada uma tem uma necessidade específica...",
                    name: "step_description",
                    widget: "string",
                    required:false,          
                  }, 
                 
                  // {
                  //   label: 'Condições',
                  //   hint:"Caso queira que essa grade apareça com uma condição específica, escolha a grade anterior abaixo",
                  //   name: 'conditions',
                  //   widget: 'object',
                  //   fields: [
                  //     {
                  //       label: 'Exibir quando a opção da grade...',
                  //       required:false,
                  //       name: 'condition_grid',
                  //       widget: 'select',
                  //       options: [{label:"Sem condição", value:"empty"}, ...window.storefront.data.grids
                  //       .map(({ grid_id, title }) => ({
                  //         label: title,
                  //         value: grid_id
                  //       }))]
                  //     },  
                  //     {
                  //       label: "Tiver o valor de...",
                  //       hint:"Digite o valor que o passo anterior deve ter para que essa personalização seja exibida",
                  //       name: "condition_value",
                  //       widget: "string"   ,
                  //       required:false,       
                  //     }, 
                  //   ]
                  // },
                  {
                    label:"Opções",
                    name:"list",
                    widget:"list",
                    required:false,
                    fields: [
                      {
                        label: "Nome da opção",
                        name: "title",
                        widget: "string"          
                      }, 
                      {
                        label: "Descrição",
                        name: "description",
                        widget: "string",
                        required:false,             
                      }, 
                      {
                        label: 'Imagem ou ícone',
                        name: 'img',
                        widget: 'image',
                        required:false,   
                      },     
                      {
                        label: "Tipo de Custo",
                        name:"type",
                        widget: "select",
                        options: ["Fixo","%"] ,
                        required:false,   
                      },
                      {
                        label: "Valor (Percentual ou Fixo em R$)",
                        name: "value",
                        widget: "number",
                        min:0,
                        value_type:"float",
                        required:false,   
                      },
                      {
                        label: "Exibir campo digitável?",
                        name:"input_type",
                        widget: "select",
                        options: ["text","number"],
                        required:true,    
                      },
                      {
                        label: "Quantidade máxima de caracteres ou de valor númerico",
                        name: "input_type_max",
                        widget: "number",
                        min:0,
                        value_type:"float",
                        required:false,   
                      },
                      {
                        label: "Campo digitável é obrigatório?",
                        name:"input_type_required",
                        widget: 'boolean',
                        default: false
                      },
                    ]
                  }, 
                ]
              },
            ]
          }          
        ]
      },
      {
        label: "[alpix.dev]",
        name: "alpix",
        editor: {
            preview: false
        },
        files: [
            {
                name: "apx_header",
                label: "Cabeçalho",
                file: "content/apx_header.json",
                fields: [
                    {
                        label: "Tarja Topo (Acima)",
                        name: "topbar_1",
                        widget: "object",
                        required: false,
                        fields: [
                            {
                                label: "Cor do Texto",
                                name: "color",
                                widget: "color"
                            },
                            {
                                label: "Cor do Fundo",
                                name: "background",
                                widget: "color"
                            },
                            {
                                label: "Itens",
                                name: "list",
                                widget: "list",
                                required: false,
                                fields: [
                                    {
                                        label: "Texto ou HTML",
                                        name: "title",
                                        widget: "string"
                                    },
                                    {
                                        label: "URL",
                                        name: "url",
                                        widget: "string"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: "Links do Menu",
                        name: "links",
                        widget: "list",
                        required: false,
                        fields: [
                            {
                                label: "Título",
                                name: "title",
                                widget: "string"
                            },
                            {
                                label: "URL do título",
                                name: "url",
                                widget: "string"
                            },
                            {
                              label: "Categoria/Coleção/Marca",
                              name: "path",
                              widget: "select",
                              required: false,
                              hint: 'Caso preenchido o campo URL DO ITEM será ignorado.',
                              options: options.state.routes
                              .filter(({ resource, name }) => Boolean(resource !== 'products' && name))
                              .map(({ name, path }) => ({
                                label: name,
                                value: `${path}`
                              }))
                            },
                            {
                                label: "Itens do Dropdown",
                                name: "list",
                                widget: "list",
                                required: false,
                                fields: [
                                    {
                                        label: "Item do Dropdown",
                                        name: "item",
                                        widget: "object",
                                        required: false,
                                        fields: [
                                            {
                                                label: "Texto do Item",
                                                name: "title",
                                                widget: "string"
                                            },
                                            {
                                                label: "URL do Item",
                                                name: "url",
                                                widget: "string"
                                            },
                                            {
                                              label: "Categoria/Coleção/Marca",
                                              name: "path",
                                              widget: "select",
                                              required: false,
                                              hint: 'Caso preenchido o campo URL DO ITEM será ignorado.',
                                              options: options.state.routes
                                              .filter(({ resource, name }) => Boolean(resource !== 'products' && name))
                                              .map(({ name, path }) => ({
                                                label: name,
                                                value: `${path}`
                                              }))
                                            },
                                            {
                                                label: "Imagem",
                                                name: "image",
                                                widget: "image",
                                                required: false
                                            },
                                            {
                                                label: "Links",
                                                name: "list",
                                                widget: "list",
                                                required: false,
                                                fields: [
                                                    {
                                                        label: "Item",
                                                        name: "item",
                                                        widget: "object",
                                                        required: false,
                                                        fields: [
                                                            {
                                                                label: "Texto do Item",
                                                                name: "title",
                                                                widget: "string"
                                                            },
                                                            {
                                                                label: "URL do Item",
                                                                name: "url",
                                                                widget: "string"
                                                            },
                                                            {
                                                              label: "Categoria/Coleção/Marca",
                                                              hint: 'Caso preenchido o campo URL DO ITEM será ignorado.',
                                                              name: "path",
                                                              widget: "select",
                                                              required: false,
                                                              options: options.state.routes
                                                              .filter(({ resource, name }) => Boolean(resource !== 'products' && name))
                                                              .map(({ name, path }) => ({
                                                                label: name,
                                                                value: `${path}`
                                                              }))
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: "Tarja Topo (Abaixo)",
                        name: "topbar_2",
                        widget: "object",
                        required: false,
                        fields: [
                            {
                                label: "Cor do Texto",
                                name: "color",
                                widget: "color"
                            },
                            {
                                label: "Cor do Fundo",
                                name: "background",
                                widget: "color"
                            },
                            {
                                label: "Itens",
                                name: "list",
                                widget: "list",
                                required: false,
                                fields: [
                                    {
                                        label: "Texto ou HTML",
                                        name: "title",
                                        widget: "string"
                                    },
                                    {
                                        label: "URL",
                                        name: "url",
                                        widget: "string"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: "apx_footer",
                label: "Rodapé",
                file: "content/apx_footer.json",
                fields: [
                    {
                        label: "Menus do Rodapé",
                        name: "links",
                        widget: "list",
                        required: false,
                        fields: [
                            {
                                label: "Título",
                                name: "title",
                                widget: "string"
                            },
                            {
                                label: "Itens da Lista",
                                name: "list",
                                widget: "list",
                                required: false,
                                fields: [
                                    {
                                        label: "Item da Lista",
                                        name: "item",
                                        widget: "object",
                                        required: false,
                                        fields: [
                                            {
                                                label: "Texto do Item",
                                                name: "title",
                                                widget: "string"
                                            },
                                            {
                                                label: "URL do Item",
                                                name: "url",
                                                widget: "string"
                                            },
                                            {
                                              label: "Categoria/Coleção/Marca",
                                              name: "path",
                                              widget: "select",
                                              hint: 'Caso preenchido o campo URL DO ITEM será ignorado.',
                                              required: false,
                                              options: options.state.routes
                                              .filter(({ resource, name }) => Boolean(resource !== 'products' && name))
                                              .map(({ name, path }) => ({
                                                label: name,
                                                value: `${path}`
                                              }))
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: "whatsapp",
                label: "Botão Whatsapp",
                file: "content/apx_whatsapp.json",
                editor: {
                    preview: false
                },
                fields: [
                    {
                        label: "Ícone",
                        name: "image",
                        widget: "image",
                        required: false
                    },
                    {
                        label: "Número (Ex: 559900000000) 55 + DDD + Telefone",
                        name: "number",
                        widget: "string"
                    },
                    {
                        label: "Posição",
                        name: "position",
                        widget: "select",
                        options: ["Esquerda", "Direita"]
                    }
                ]
            },
            {
                name: "apx_category",
                label: "Configurações de Categoria",
                file: "content/apx_category.json",
                editor: {
                    preview: false
                },
                fields: [
                    {
                        label: "Produtos por linha no desktop",
                        required: true,
                        name: "num_col_md",
                        widget: "select",
                        options: ["2", "3", "4", "5"]
                    },
                    {
                        label: "Produtos por linha no mobile",
                        required: true,
                        name: "num_col_sm",
                        widget: "select",
                        options: ["1", "2"]
                    },
                    {
                        label: "Espaçamento",
                        required: true,
                        name: "padding",
                        widget: "select",
                        options: ["px-md-0", "px-md-1", "px-md-2", "px-md-3", "px-md-4", "px-md-5"]
                    },
                    {
                        label: "Espaçamento Mobile",
                        required: true,
                        name: "padding_sm",
                        widget: "select",
                        options: ["px-0", "px-1", "px-2", "px-3", "px-4", "px-5"]
                    },
                    {
                        label: "Container",
                        required: true,
                        name: "container",
                        widget: "select",
                        options: ["container", "container-fluid", "container_90"]
                    }
                ]
            }
        ]
    }
       
    ]
  }
}