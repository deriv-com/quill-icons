import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSevenXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30M8.625 12v.047c-.656 0-1.125.469-1.125 1.125 0 .61.469 1.125 1.125 1.125h4.828l-4.36 8.062a1.16 1.16 0 0 0 .47 1.547 1.16 1.16 0 0 0 1.546-.468l5.25-9.75c.188-.376.141-.797-.047-1.126-.187-.328-.562-.562-.937-.562z' />
    </g>
    <defs>
      <clipPath id='e3a8ddafb9c69c6c5c7e4fd8d5d16054__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSevenXlFillIcon);
export default ForwardRef;
