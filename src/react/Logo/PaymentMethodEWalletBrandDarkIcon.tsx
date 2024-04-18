import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodEWalletBrandDarkIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 80'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <g fill='#2986D3'>
        <path d='M39.907 23.031V20A15.275 15.275 0 0 1 54.54 34.631h-3.025a12.244 12.244 0 0 0-11.607-11.6' />
        <path d='M39.907 28.906v-3.012a8.75 8.75 0 0 1 8.738 8.737h-3.013a5.73 5.73 0 0 0-5.725-5.725' />
      </g>
      <g fill='#122D96'>
        <path d='M18.189 39.763a5 5 0 0 0-3.463 1.187 5 5 0 0 0-1.588 3.169h9.7a4.45 4.45 0 0 0-1.287-3.17 4.62 4.62 0 0 0-3.362-1.186' />
        <path
          fillRule='evenodd'
          d='M31.064 49.688v-8.37a2.756 2.756 0 0 1 2.75-2.75h9.475v-2.737a4.825 4.825 0 0 0-4.82-4.825H9.427a1 1 0 1 1 0-1.994h23.181l1.25-3.625H8.732a4.2 4.2 0 0 0-4.193 4.2v25.626A4.82 4.82 0 0 0 9.357 60h29.1a4.82 4.82 0 0 0 4.832-4.819v-2.743h-9.475a2.756 2.756 0 0 1-2.75-2.75m-5.457-3.394h-12.5c.047.649.21 1.284.482 1.875.261.585.623 1.12 1.068 1.581.444.453.97.818 1.55 1.075a4.8 4.8 0 0 0 1.95.394 6.2 6.2 0 0 0 2.838-.625 6.3 6.3 0 0 0 2.075-1.75l1.95 1.518a7.9 7.9 0 0 1-3.038 2.5 9.7 9.7 0 0 1-3.825.707 7.9 7.9 0 0 1-3.268-.625 7.3 7.3 0 0 1-2.425-1.694 7.6 7.6 0 0 1-1.55-2.575 9.1 9.1 0 0 1-.544-3.162 8.9 8.9 0 0 1 .594-3.282 7.4 7.4 0 0 1 4.156-4.244 8.3 8.3 0 0 1 3.169-.6 7.8 7.8 0 0 1 2.968.55c.882.35 1.676.89 2.325 1.582a7.1 7.1 0 0 1 1.5 2.537c.366 1.1.544 2.254.525 3.413z'
          clipRule='evenodd'
        />
        <path
          fillRule='evenodd'
          d='M33.814 39.775H45.65V51.25H33.813a1.543 1.543 0 0 1-1.543-1.562v-8.37a1.55 1.55 0 0 1 1.543-1.543m1.669 6.874c.224.149.487.227.756.226a1.35 1.35 0 0 0 1.35-1.35 1.356 1.356 0 1 0-2.106 1.124'
          clipRule='evenodd'
        />
      </g>
    </g>
    <g fill='#fff'>
      <path d='M62.539 45.809V34.67h7.546v2.154h-5.131v2.282h4.4v2.139h-4.4v2.41h5.131v2.154zM71.808 42.09v-2.297h4.719v2.297zM77.614 37.43h2.272l.81 3.384.572 2.553h.064l.667-2.553.953-3.383h2.145l.97 3.383.683 2.553h.063l.572-2.553.81-3.383h2.177l-2.304 8.378h-2.462l-1.017-3.543-.588-2.17h-.048l-.572 2.17-1.017 3.543H79.95zM97.715 45.809q-.636 0-1.065-.4-.413-.398-.524-1.069h-.096q-.19.814-.841 1.245-.653.415-1.605.415-1.255 0-1.923-.67-.667-.67-.667-1.771 0-1.325.953-1.963.969-.654 2.622-.654h1.319v-.527q0-.606-.318-.958-.318-.367-1.065-.367-.7 0-1.112.304-.413.303-.683.686l-1.398-1.245a3.6 3.6 0 0 1 1.27-1.165q.78-.43 2.098-.43 1.779 0 2.67.781.888.782.889 2.282v3.67h.778v1.836zm-3.257-1.453q.588 0 1-.255.43-.255.43-.83v-.99h-1.144q-1.383 0-1.383.942v.24q0 .462.286.686.287.207.81.207M102.931 45.809q-1.207 0-1.779-.59-.556-.592-.556-1.708V34h2.351v9.973h1.049v1.836zM107.617 45.809q-1.208 0-1.779-.59-.556-.592-.556-1.708V34h2.351v9.973h1.049v1.836zM113.571 46q-.953 0-1.7-.303a3.7 3.7 0 0 1-1.271-.878 3.9 3.9 0 0 1-.779-1.388 6.1 6.1 0 0 1-.254-1.82q0-.989.254-1.786.255-.814.747-1.389a3.34 3.34 0 0 1 1.239-.877q.732-.32 1.669-.32 1.032 0 1.763.351.746.351 1.208.942.476.59.683 1.372a5.8 5.8 0 0 1 .222 1.612v.702h-5.354v.128q0 .83.445 1.324.444.48 1.398.479.73 0 1.192-.287.46-.303.858-.718l1.175 1.468q-.556.654-1.461 1.021-.89.367-2.034.367m-.048-7.021q-.714 0-1.128.478-.397.463-.397 1.245v.128h2.923v-.144q0-.765-.349-1.229-.334-.478-1.049-.478M121.936 45.809q-1.223 0-1.859-.623-.62-.622-.619-1.819v-4.101h-1.176v-1.835h.588q.477 0 .651-.224.175-.24.175-.67v-1.372h2.113v2.266h1.653v1.835h-1.653v4.707h1.526v1.836z' />
    </g>
    <defs>
      <clipPath id='131dc152fc58cb77415d7574f7ca9acb__a'>
        <path fill='#fff' d='M4.539 20h50v40h-50z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodEWalletBrandDarkIcon);
export default ForwardRef;
