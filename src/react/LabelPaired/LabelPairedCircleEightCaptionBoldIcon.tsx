import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEightCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.875 9.5q0-1.336-.656-2.437A4.87 4.87 0 0 0 8.438 5.28 4.84 4.84 0 0 0 6 4.625q-1.29 0-2.437.656A4.87 4.87 0 0 0 1.78 7.063 4.67 4.67 0 0 0 1.125 9.5q0 1.335.656 2.438a4.87 4.87 0 0 0 1.782 1.78A4.84 4.84 0 0 0 6 14.376q1.29 0 2.438-.656a4.87 4.87 0 0 0 1.78-1.781 4.7 4.7 0 0 0 .657-2.438M0 9.5a6.14 6.14 0 0 1 .797-3A6.2 6.2 0 0 1 3 4.297 6.1 6.1 0 0 1 6 3.5q1.57 0 3 .797A6.2 6.2 0 0 1 11.203 6.5q.774 1.359.797 3a6.14 6.14 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.1 6.1 0 0 1-3 .797 6.1 6.1 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.14 6.14 0 0 1 0 9.5m6.188-3q.726.024 1.195.492.468.469.492 1.196 0 .562-.305.984.657.54.68 1.453-.023.797-.54 1.336-.538.515-1.335.539h-.75q-.797-.023-1.336-.54-.515-.538-.539-1.335.024-.915.703-1.453a1.56 1.56 0 0 1-.328-.985q.024-.726.492-1.195.469-.468 1.196-.492zm-.375 2.25h.375q.514-.047.562-.562-.047-.516-.562-.563h-.375q-.516.047-.563.563.047.514.563.562m.375 1.125h-.563a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54q0 .328.21.54.212.21.54.21h.75a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21z' />
    </g>
    <defs>
      <clipPath id='56fc5ee69cbdf55f__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEightCaptionBoldIcon);
export default ForwardRef;
