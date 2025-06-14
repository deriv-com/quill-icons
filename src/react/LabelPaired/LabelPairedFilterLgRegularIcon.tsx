import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilterLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 8.313c0-.86.664-1.563 1.523-1.563h16.915c.859 0 1.562.703 1.562 1.563 0 .351-.156.703-.39.976l-7.11 8.633v5.039c0 .703-.625 1.328-1.328 1.328a1.26 1.26 0 0 1-.82-.312L7.969 22.14a1.22 1.22 0 0 1-.508-.977v-3.242L.35 9.289A1.5 1.5 0 0 1 0 8.313M1.523 8c-.156 0-.273.156-.273.313 0 .078 0 .117.04.195l7.304 8.789c.078.117.156.273.156.39v3.477L11.133 23h.039c.039 0 .078 0 .078-.04v-5.273c0-.117.04-.273.117-.39l7.305-8.79c.039-.077.078-.116.078-.194A.336.336 0 0 0 18.438 8z' />
    </g>
    <defs>
      <clipPath id='4f43ad312aab89c5e7972f7480ccaf28__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilterLgRegularIcon);
export default ForwardRef;
