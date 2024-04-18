import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedEurBasketIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#0AA0B0' fillRule='evenodd' clipRule='evenodd'>
      <path d='M17.515 4.857 21.8 12H27a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h5.2l4.286-7.143a1.766 1.766 0 0 1 3.029 0M13.185 12l2.729-4.605a.1.1 0 0 1 .172 0L18.815 12zM25.72 16a1 1 0 0 1 .97 1.242l-2.5 10a1 1 0 0 1-.97.758H8.78a1 1 0 0 1-.97-.758l-2.5-10A1 1 0 0 1 6.28 16zM10 20a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0zm6-1a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1m4 1a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0z' />
    </g>
    <path
      fill='#0D47A1'
      d='M30.75 0h-12.5C17.56 0 17 .56 17 1.25v7.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25v-7.5C32 .56 31.44 0 30.75 0'
    />
    <path
      fill='#FFD955'
      d='m24.542 7.92.104.315.327.003c.043 0 .06.055.026.08l-.263.199.098.317c.013.041-.033.075-.067.05l-.267-.193-.267.193c-.034.025-.08-.009-.067-.05l.098-.317-.263-.198c-.034-.026-.017-.08.026-.081l.327-.003.104-.315c.014-.041.07-.041.084 0m-1.615-.53.104.316.327.002c.043 0 .06.056.026.081l-.264.198.1.318c.012.04-.034.075-.068.05l-.267-.194-.267.194c-.034.025-.08-.01-.067-.05l.098-.318-.263-.198c-.034-.025-.017-.08.026-.08l.327-.003.104-.316a.044.044 0 0 1 .084 0m3.254 0c.013-.041.07-.041.084 0l.103.316.328.002c.043 0 .06.056.026.081l-.264.198.1.318c.012.04-.034.075-.069.05l-.266-.194-.267.194c-.034.025-.08-.01-.068-.05l.1-.318-.264-.198c-.035-.025-.017-.08.025-.08l.328-.003zm1.305-1.241.104.316.328.002c.042 0 .06.056.026.081l-.264.198.099.317c.013.042-.033.076-.068.05l-.266-.193-.267.193c-.035.026-.08-.008-.068-.05l.099-.317-.264-.198c-.034-.025-.016-.08.026-.08l.328-.003.104-.316c.013-.041.07-.041.083 0m-5.793-.02.012.02.104.316.328.002c.034 0 .052.036.04.063l-.014.018-.264.198.099.317a.045.045 0 0 1-.047.059l-.021-.009-.267-.193-.266.193c-.028.02-.063.003-.07-.026l.002-.024.099-.317-.264-.198a.045.045 0 0 1 .004-.075l.022-.006.328-.002.103-.316c.011-.033.05-.04.072-.02m6.187-1.6.103.316.328.002c.043 0 .06.055.026.081l-.264.198.1.317c.012.041-.034.075-.068.05l-.267-.193-.267.193c-.034.025-.08-.009-.068-.05l.1-.317-.264-.198c-.034-.026-.017-.08.026-.08l.327-.003.104-.316c.013-.041.07-.041.084 0m-6.676 0 .104.316.328.002c.042 0 .06.055.025.081l-.263.198.099.317c.012.041-.034.075-.068.05l-.267-.193-.267.193c-.034.025-.08-.009-.067-.05l.099-.317-.264-.198c-.034-.026-.017-.08.026-.08l.328-.003.103-.316c.014-.041.07-.041.084 0m.501-1.771.104.316.328.002c.042 0 .06.056.026.081l-.264.198.099.318c.012.04-.034.075-.068.05l-.267-.194-.266.194c-.035.025-.081-.01-.068-.05l.099-.318-.264-.198c-.034-.025-.017-.08.026-.08l.328-.003.103-.316c.014-.04.07-.04.084 0m5.769-.02.012.02.104.316.328.002c.034 0 .052.036.04.063l-.014.018-.264.198.099.318a.045.045 0 0 1-.046.058l-.022-.008-.266-.194-.267.194c-.028.02-.063.002-.07-.027l.002-.023.099-.318-.264-.198a.045.045 0 0 1 .004-.074l.022-.007.328-.002.104-.316c.01-.033.049-.04.07-.02m-1.21-1.221.104.316.328.002c.043 0 .06.056.026.081l-.264.198.1.318c.012.04-.034.075-.069.05l-.266-.194-.267.194c-.034.025-.08-.01-.068-.05l.1-.318-.264-.198c-.035-.025-.017-.08.025-.08l.328-.003.104-.316c.013-.041.07-.041.084 0m-3.35-.02.013.02.104.316.327.002c.034 0 .052.036.04.063l-.014.018-.264.198.1.318a.045.045 0 0 1-.047.058l-.021-.008-.267-.194-.267.194c-.027.02-.062.002-.069-.027l.002-.023.098-.318-.263-.198a.045.045 0 0 1 .003-.075l.023-.006.327-.002.104-.316c.01-.033.05-.04.071-.02m1.628-.36.104.317.327.002c.043 0 .06.056.026.081l-.263.198.098.318c.013.04-.033.075-.067.05l-.267-.194-.267.194c-.034.025-.08-.01-.067-.05l.098-.318-.263-.198c-.034-.025-.017-.08.026-.08l.327-.003.104-.316c.014-.041.07-.041.084 0'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M30.75.625h-12.5a.625.625 0 0 0-.625.625v7.5c0 .345.28.625.625.625h12.5c.345 0 .625-.28.625-.625v-7.5a.625.625 0 0 0-.625-.625M18.25 0C17.56 0 17 .56 17 1.25v7.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25v-7.5C32 .56 31.44 0 30.75 0z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedEurBasketIcon);
export default ForwardRef;