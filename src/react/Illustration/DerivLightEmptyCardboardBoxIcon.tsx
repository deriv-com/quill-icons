import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightEmptyCardboardBoxIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 64 64'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#c0b12e4a1a28b5aeea9456c74a18b599__a)'>
      <path
        fill='#000'
        d='M55.744 10.787a1.6 1.6 0 0 0-1.566-.657q-.035-.01-.068-.02L29.683 6.519a1.6 1.6 0 0 0-.793.082L9.326 13.788l-.025.01c-.02.01-.04.023-.062.03-.256.114-.48.289-.65.51q-.008.008-.015.016L.312 25.682c-.316.434-.398 1-.218 1.506.18.508.6.892 1.122 1.026l7.168 1.855v17.765c0 .714.466 1.345 1.148 1.554l26.248 8.04c.008.004.018 0 .027.005.14.039.287.064.434.065l.012.002c.156 0 .307-.028.458-.073q.07-.023.14-.056c.064-.024.127-.041.19-.074L55.875 46.82c.516-.287.835-.83.835-1.42V27.637l6.37-3.066a1.627 1.627 0 0 0 .626-2.398zm-26.125-.994 19.066 2.805-12.647 5.895-20.028-3.7zM10.59 17.097l22.949 4.239-6.745 10.143L4.34 25.667zm1.035 29.535V30.908l15.472 4.004a1.62 1.62 0 0 0 1.754-.672l5.78-8.69v28.128zm41.84-2.19-15.593 8.672V27.45l2.847 6.065a1.62 1.62 0 0 0 2.167.773L53.465 29.2l.002 15.24zM42.96 30.65l-4.546-9.681 15.455-7.203 6.088 8.705z'
      />
    </g>
    <defs>
      <clipPath id='c0b12e4a1a28b5aeea9456c74a18b599__a'>
        <path fill='#fff' d='M0 0h64v64H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightEmptyCardboardBoxIcon);
export default ForwardRef;
