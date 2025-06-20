import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleStarMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m8-4.75a.54.54 0 0 0-.469.281L6.406 9.844l-2.531.375c-.187 0-.344.156-.406.312a.54.54 0 0 0 .125.531l1.844 1.782L5 15.375c-.031.188.031.375.188.469a.55.55 0 0 0 .53.062L8 14.72l2.25 1.187a.55.55 0 0 0 .531-.062c.156-.094.219-.281.188-.469l-.406-2.531 1.812-1.781a.44.44 0 0 0 .125-.5.51.51 0 0 0-.406-.344l-2.531-.375L8.437 7.53A.5.5 0 0 0 8 7.281z' />
    </g>
    <defs>
      <clipPath id='06dfaf84ddf46d7d288aea1b6afa7fdf__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarMdFillIcon);
export default ForwardRef;
