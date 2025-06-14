import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleStarMdRegularIcon = (
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
      <path d='M8 5a6.98 6.98 0 0 0-6.062 3.5c-1.282 2.188-1.282 4.844 0 7C3.188 17.688 5.467 19 8 19c2.5 0 4.781-1.312 6.031-3.5 1.281-2.156 1.281-4.812 0-7C12.781 6.344 10.5 5 8 5m0 15c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20m.438-12.469 1.124 2.313 2.532.375a.51.51 0 0 1 .406.344.44.44 0 0 1-.125.5l-1.812 1.78.406 2.532c.031.188-.031.375-.188.469a.55.55 0 0 1-.531.062L8 14.72l-2.281 1.187a.55.55 0 0 1-.532-.062c-.156-.094-.218-.281-.187-.469l.438-2.531-1.844-1.781a.54.54 0 0 1-.125-.532c.062-.156.219-.312.406-.312l2.531-.375L7.531 7.53A.58.58 0 0 1 8 7.25c.188 0 .344.125.438.281M7.188 10.5c-.063.156-.22.25-.375.281l-1.782.281 1.282 1.25c.125.126.187.282.156.438l-.313 1.781 1.594-.844a.6.6 0 0 1 .469 0l1.594.844L9.5 12.75c-.031-.156.031-.312.156-.437l1.281-1.25-1.78-.282c-.157 0-.313-.125-.376-.25L8 8.906z' />
    </g>
    <defs>
      <clipPath id='42bb3670854c0ca4aac678b0a1b24ba5__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarMdRegularIcon);
export default ForwardRef;
