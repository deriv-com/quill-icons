import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartCandlestickXlRegularIcon = (
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
      <path d='M1.5 8.25v16.5c0 1.266.984 2.25 2.25 2.25h19.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H3.75C1.64 28.5 0 26.86 0 24.75V8.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75m13.5 0v2.297c.844.187 1.5.937 1.5 1.828v3.75c0 .938-.656 1.688-1.5 1.875v2.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V18c-.89-.187-1.5-.937-1.5-1.875v-3.75c0-.89.61-1.64 1.5-1.828V8.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75M8.25 9c.375 0 .75.375.75.75v2.297c.844.187 1.5.937 1.5 1.828v5.25c0 .938-.656 1.688-1.5 1.875v2.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V21c-.89-.187-1.5-.937-1.5-1.875v-5.25c0-.89.61-1.64 1.5-1.828V9.75c0-.375.328-.75.75-.75M15 12.375a.4.4 0 0 0-.375-.375h-.75a.37.37 0 0 0-.375.375v3.75c0 .234.14.375.375.375h.75a.37.37 0 0 0 .375-.375zm4.875 4.125a.37.37 0 0 0-.375.375v2.25c0 .234.14.375.375.375h.75a.37.37 0 0 0 .375-.375v-2.25a.4.4 0 0 0-.375-.375zM19.5 15v-2.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75v2.297c.844.187 1.5.937 1.5 1.828v2.25c0 .938-.656 1.688-1.5 1.875v2.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V21c-.89-.187-1.5-.937-1.5-1.875v-2.25c0-.89.61-1.64 1.5-1.828zM8.625 13.5h-.75a.37.37 0 0 0-.375.375v5.25c0 .234.14.375.375.375h.75A.37.37 0 0 0 9 19.125v-5.25a.4.4 0 0 0-.375-.375' />
    </g>
    <defs>
      <clipPath id='e855b8e3601f499f4b91739e4043e761__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartCandlestickXlRegularIcon);
export default ForwardRef;
