import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFourMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.906 6.438 2.563 13.5H8V9c0-.531.438-1 1-1 .531 0 1 .469 1 1v4.5h1c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-1V18c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-2.5H1c-.344 0-.687-.156-.875-.437-.156-.313-.187-.657-.031-.97l4-8.5a.997.997 0 0 1 1.312-.5c.5.25.719.845.5 1.345' />
    </g>
    <defs>
      <clipPath id='7f79f8b788be55e6b7a6cd57d69a638a__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourMdFillIcon);
export default ForwardRef;
