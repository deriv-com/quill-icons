import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightSecureResponsiveIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 120 152'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#EBECEE'
      d='M114.412 50.799 104.371 98.67c-.796 3.794-3.034 6.695-5.867 8.133l-.18.09-.022.01-5.79 2.897a10.3 10.3 0 0 0 2.724-2.036c1.493-1.552 2.613-3.635 3.128-6.091l.968-4.609 9.073-43.262c1.389-6.625-2.121-13.56-7.802-15.413L28.485 14.87a9.1 9.1 0 0 0-3.718-.417h-.001a9.1 9.1 0 0 0-3.036.846l5.373-2.673.007-.004.955-.475.011-.006a9.03 9.03 0 0 1 6.415-.275l72.119 23.52c5.681 1.85 9.192 8.787 7.802 15.413'
    />
    <path
      fill='#000'
      d='M92.511 110.085a.284.284 0 0 1-.13-.538 10 10 0 0 0 2.648-1.98c1.511-1.571 2.567-3.628 3.055-5.952l10.041-47.873c1.364-6.504-2.052-13.27-7.613-15.083L28.395 15.14a8.75 8.75 0 0 0-3.602-.404h-.009a8.8 8.8 0 0 0-2.935.82.284.284 0 0 1-.249-.51l5.365-2.67.016-.009.954-.475.027-.013c2.12-.904 4.408-1.003 6.616-.283l72.119 23.52c5.828 1.899 9.413 8.96 7.992 15.741L104.648 98.73c-.787 3.753-2.981 6.787-6.016 8.328l-.211.105-5.782 2.892a.3.3 0 0 1-.126.03zm-66.874-95.96c.985 0 1.97.159 2.936.474l72.119 23.52c5.828 1.899 9.413 8.961 7.992 15.741l-10.041 47.873c-.51 2.428-1.616 4.582-3.201 6.23l-.105.108 3.04-1.521c2.881-1.461 4.965-4.355 5.716-7.937l10.041-47.872c1.365-6.505-2.051-13.271-7.612-15.085l-72.12-23.52a8.72 8.72 0 0 0-6.206.264l-.952.472-.015.009-2.615 1.3.123-.013h.009q.445-.042.89-.042'
    />
    <path
      fill='#EBECEE'
      d='m99.33 97.065-.968 4.609c-.514 2.456-1.633 4.539-3.128 6.091-.81.842-1.73 1.529-2.724 2.036a9.04 9.04 0 0 1-7.003.549l-2.424-.79-5.61-1.831-4.152-1.354-8.924-2.911-11.164-3.64-9.745-3.179-30.1-9.816c-5.678-1.85-9.19-8.788-7.8-15.413l.968-4.61 92.773 30.256z'
    />
    <path
      fill='#000'
      d='M88.359 111.095q-.615 0-1.23-.082a9.7 9.7 0 0 1-1.708-.391l-72.119-23.52c-5.827-1.899-9.412-8.961-7.991-15.741l.967-4.61a.284.284 0 0 1 .367-.212l92.773 30.256c.138.045.22.186.19.329l-.967 4.609c-.509 2.428-1.616 4.582-3.2 6.23a10.5 10.5 0 0 1-2.8 2.092 9.4 9.4 0 0 1-4.282 1.04M6.77 67.177l-.902 4.299c-1.365 6.504 2.05 13.27 7.61 15.084l72.12 23.52a8.797 8.797 0 0 0 6.785-.532 10 10 0 0 0 2.647-1.981c1.51-1.57 2.566-3.628 3.054-5.952l.915-4.36z'
    />
    <path
      fill='#fff'
      d='m108.405 53.802-9.074 43.262L6.557 66.808l9.072-43.262c.787-3.752 2.985-6.63 5.775-8.086l.011-.006.31-.155a9.1 9.1 0 0 1 3.036-.846h.002a9.1 9.1 0 0 1 3.717.417L100.6 38.389c5.681 1.85 9.192 8.788 7.802 15.413z'
    />
    <path
      fill='#000'
      d='M99.33 97.35a.3.3 0 0 1-.088-.015L6.469 67.078a.285.285 0 0 1-.19-.328l9.072-43.262c.776-3.704 2.934-6.722 5.922-8.28l.016-.008.311-.155a9.4 9.4 0 0 1 3.136-.875h.008a9.3 9.3 0 0 1 3.827.43l72.119 23.52c5.829 1.9 9.414 8.962 7.992 15.742l-9.073 43.261a.28.28 0 0 1-.137.188.3.3 0 0 1-.142.039M6.889 66.617l92.229 30.08 9.01-42.952c1.364-6.504-2.052-13.27-7.613-15.083L28.395 15.14a8.75 8.75 0 0 0-3.602-.404h-.01a8.8 8.8 0 0 0-2.934.82l-.306.152c-2.842 1.482-4.893 4.359-5.635 7.895l-9.02 43.013z'
    />
    <path
      fill='#fff'
      d='M83.086 109.56 70.19 121.23a6.48 6.48 0 0 1-6.361 1.356l-31.434-10.251a2.796 2.796 0 0 1-1.93-2.672c0-.743.294-1.495.922-2.064l12.102-10.954 9.745 3.179 11.164 3.64 8.924 2.911 4.152 1.354 5.61 1.831z'
    />
    <path
      fill='#000'
      d='M65.832 123.189a6.8 6.8 0 0 1-2.091-.331l-31.434-10.252a3.068 3.068 0 0 1-2.128-2.942c0-.873.36-1.681 1.016-2.275l12.102-10.953a.28.28 0 0 1 .28-.06l39.596 12.914a.285.285 0 0 1 .104.481l-12.897 11.67a6.79 6.79 0 0 1-4.548 1.747zm-22.274-26.22-11.98 10.841a2.48 2.48 0 0 0-.829 1.854 2.5 2.5 0 0 0 1.735 2.4l31.433 10.252A6.22 6.22 0 0 0 70 121.02l12.532-11.342z'
    />
    <path
      fill='#EBECEE'
      d='m87.354 110.811-17.163 15.532a6.48 6.48 0 0 1-6.36 1.356l-31.434-10.251c-1.238-.404-1.93-1.527-1.93-2.671v-5.113a2.8 2.8 0 0 0 1.93 2.672l31.433 10.252a6.49 6.49 0 0 0 6.361-1.356l12.897-11.67 2.424.789a9.3 9.3 0 0 0 1.657.38l.186.08z'
    />
    <path
      fill='#000'
      d='M65.832 128.301a6.7 6.7 0 0 1-2.091-.332l-31.434-10.251a3.085 3.085 0 0 1-2.127-2.941v-5.113a.285.285 0 0 1 .57 0 2.5 2.5 0 0 0 1.734 2.4l31.433 10.252A6.22 6.22 0 0 0 70 121.02l12.897-11.67a.28.28 0 0 1 .278-.06l2.424.789a9 9 0 0 0 1.608.369q.038.005.074.02l.186.08a.283.283 0 0 1 .08.472l-17.163 15.532a6.79 6.79 0 0 1-4.548 1.747zM30.75 111.467v3.312c0 1.096.697 2.06 1.734 2.4l31.433 10.251A6.22 6.22 0 0 0 70 126.134l16.769-15.175a10 10 0 0 1-1.346-.336l-2.266-.738-12.774 11.56a6.79 6.79 0 0 1-6.64 1.416L32.31 112.609a3.045 3.045 0 0 1-1.56-1.141z'
    />
    <path
      fill='#000'
      d='M30.465 115.173a.285.285 0 0 1-.285-.285v-.111a.285.285 0 0 1 .57 0v.111a.285.285 0 0 1-.285.285'
    />
    <path fill='#fff' d='M60.177 102.089v10.985l-11.164-3.642V98.448z' />
    <path
      fill='#000'
      d='M60.177 113.359a.3.3 0 0 1-.088-.014l-11.164-3.642a.29.29 0 0 1-.196-.271V98.448a.286.286 0 0 1 .373-.27l11.163 3.64a.29.29 0 0 1 .197.271v10.985a.287.287 0 0 1-.285.285m-10.879-4.133 10.595 3.456v-10.387l-10.595-3.454z'
    />
    <path fill='#EBECEE' d='m69.1 104.999-8.923 8.075v-10.985z' />
    <path
      fill='#000'
      d='M60.177 113.359a.286.286 0 0 1-.285-.285v-10.985c0-.091.045-.177.119-.231a.28.28 0 0 1 .254-.04l8.925 2.911a.285.285 0 0 1 .103.481l-8.924 8.075a.3.3 0 0 1-.19.074zm.285-10.878v9.953l8.085-7.317zM58.689 68.034a.28.28 0 0 1-.235-.123L47.271 51.547 33.007 61.29a.285.285 0 0 1-.321-.47l14.498-9.903a.285.285 0 0 1 .396.074l11.183 16.363L84.728 49.62a.285.285 0 0 1 .321.469l-26.2 17.894a.3.3 0 0 1-.16.05z'
    />
    <path
      fill='#FF7E88'
      d='m98.948 98.893-7.042 5.282c-1.496 1.059-4.407 2.813-8.463 3.42a19.56 19.56 0 0 1-7.05-.233l7.043-5.281c1.59.345 3.977.658 6.818.266 4.178-.573 7.17-2.374 8.694-3.454'
    />
    <path
      fill='#000'
      d='M80.558 108.095c-1.414 0-2.828-.152-4.227-.457a.286.286 0 0 1-.11-.506l7.043-5.281a.28.28 0 0 1 .23-.05c2.226.481 4.486.569 6.718.262a19.5 19.5 0 0 0 8.569-3.404.285.285 0 0 1 .334.459l-7.042 5.282a20.1 20.1 0 0 1-8.591 3.473c-.073.013-.154.023-.233.034q-1.346.186-2.695.185zm-3.487-.888c2.023.371 4.072.42 6.1.14q.114-.016.224-.033a19.5 19.5 0 0 0 8.345-3.372l3.64-2.731a19.8 19.8 0 0 1-5.09 1.417c-2.256.31-4.54.229-6.788-.244z'
    />
    <path
      fill='#FF7E88'
      d='m114.369 106.203-7.042 5.282a23.4 23.4 0 0 1-8.263-2.128 23.4 23.4 0 0 1-7.159-5.181l7.042-5.283a23.4 23.4 0 0 0 7.162 5.182 23.3 23.3 0 0 0 8.261 2.128z'
    />
    <path
      fill='#000'
      d='M107.328 111.77h-.02a23.6 23.6 0 0 1-8.363-2.156 23.5 23.5 0 0 1-7.247-5.244.285.285 0 0 1 .035-.422l7.042-5.282a.286.286 0 0 1 .379.032 23 23 0 0 0 7.073 5.118 23 23 0 0 0 8.161 2.102c.118.009.219.09.253.204a.28.28 0 0 1-.103.308l-7.042 5.283a.3.3 0 0 1-.17.057zm-14.996-7.559a23 23 0 0 0 6.853 4.887 23 23 0 0 0 8.058 2.096l6.359-4.771a23.5 23.5 0 0 1-7.614-2.091 23.5 23.5 0 0 1-7.072-5.059l-6.582 4.938z'
    />
    <path
      fill='#FF444F'
      d='M107.328 111.485v10.228c-.015.512-.048 1.21-.126 2.04-.042.444-.16 1.693-.39 2.822-.413 2.013-1.158 3.516-1.569 4.328a20 20 0 0 1-2.334 3.599 17.6 17.6 0 0 1-2.112 2.218q-.215.188-.43.362a18.4 18.4 0 0 1-4.98 2.898c-1.407.616-3.275.617-3.297.617-2.492-.691-5.962-3.204-5.962-3.204a27 27 0 0 1-4.792-5.11 27.4 27.4 0 0 1-3.827-7.651c-.941-2.995-1.062-5.284-1.085-5.85-.024-.538-.021-.99-.014-1.31q-.01-5.054-.016-10.108c1.59.345 3.98.658 6.819.267q.117-.016.232-.034a19.7 19.7 0 0 0 8.462-3.42 23.4 23.4 0 0 0 7.159 5.181 23.4 23.4 0 0 0 8.262 2.129z'
    />
    <path
      fill='#000'
      d='M92.09 140.88a.3.3 0 0 1-.077-.01c-2.512-.697-5.91-3.144-6.053-3.248l-.014-.011a27.3 27.3 0 0 1-4.841-5.164 27.6 27.6 0 0 1-3.867-7.733c-.888-2.822-1.064-5.083-1.099-5.924-.02-.446-.024-.893-.014-1.328l-.017-10.101a.284.284 0 0 1 .344-.279c2.223.484 4.485.572 6.72.265q.113-.016.223-.033a19.5 19.5 0 0 0 8.345-3.372.285.285 0 0 1 .372.037 23 23 0 0 0 7.072 5.118 23 23 0 0 0 8.163 2.102c.149.01.264.134.264.285v10.227c-.022.716-.064 1.39-.128 2.067-.039.421-.16 1.706-.394 2.853-.429 2.097-1.216 3.652-1.594 4.4a20.4 20.4 0 0 1-2.366 3.649 18.6 18.6 0 0 1-2.147 2.254 18.587 18.587 0 0 1-5.493 3.31c-1.44.629-3.322.636-3.402.636zm-5.788-3.713c.173.125 3.466 2.474 5.827 3.144.269-.004 1.91-.053 3.147-.593a18 18 0 0 0 5.336-3.214 18 18 0 0 0 2.078-2.182 19.7 19.7 0 0 0 2.301-3.548c.367-.726 1.129-2.235 1.545-4.257.228-1.117.346-2.377.384-2.791.063-.666.104-1.328.125-2.023v-9.955a23.5 23.5 0 0 1-8.099-2.135 23.5 23.5 0 0 1-7.076-5.065 20.1 20.1 0 0 1-8.383 3.328c-.072.013-.153.023-.233.034a19.8 19.8 0 0 1-6.574-.199l.016 9.758q-.015.644.014 1.299c.034.819.206 3.02 1.073 5.777a27 27 0 0 0 3.785 7.571 26.7 26.7 0 0 0 4.735 5.051z'
    />
    <path
      fill='#FF7E88'
      d='M114.369 106.203v10.227a32 32 0 0 1-.127 2.04c-.041.444-.158 1.693-.389 2.824-.412 2.012-1.159 3.516-1.568 4.327-1.715 3.394-3.987 5.414-4.447 5.816a18.5 18.5 0 0 1-2.009 1.519l-.007.006-5.455 4.12q.215-.175.43-.362c.262-.227 1.114-.983 2.112-2.218a20 20 0 0 0 2.334-3.599c.411-.812 1.156-2.315 1.569-4.328.23-1.129.347-2.378.39-2.822.078-.83.111-1.528.126-2.04v-10.228l7.042-5.282z'
    />
    <path
      fill='#000'
      d='M100.369 137.365a.287.287 0 0 1-.18-.507c.134-.108.272-.225.422-.355a18 18 0 0 0 2.078-2.183 19.7 19.7 0 0 0 2.3-3.548c.368-.725 1.13-2.235 1.545-4.256.228-1.117.346-2.378.385-2.792.062-.665.103-1.327.125-2.023v-10.219a.28.28 0 0 1 .114-.227l7.042-5.283a.285.285 0 0 1 .455.228v10.228a33 33 0 0 1-.128 2.067v.015c-.046.467-.162 1.706-.394 2.838-.427 2.086-1.214 3.648-1.592 4.398-1.605 3.177-3.692 5.187-4.514 5.902a18 18 0 0 1-2.033 1.537l-5.453 4.12a.3.3 0 0 1-.171.057zm7.244-25.738v10.086c-.023.715-.064 1.39-.128 2.067-.04.421-.161 1.706-.394 2.852-.43 2.097-1.217 3.652-1.595 4.4a20.3 20.3 0 0 1-2.278 3.54l2.432-1.837.022-.017c.695-.453 1.36-.956 1.978-1.495.798-.694 2.821-2.642 4.38-5.73.367-.729 1.133-2.244 1.542-4.255.227-1.104.34-2.321.383-2.779v-.016a31 31 0 0 0 .127-2.023v-9.649l-6.473 4.855z'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivLightSecureResponsiveIcon);
export default ForwardRef;
