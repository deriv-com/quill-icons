import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImageSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 6.375c0-.957.766-1.75 1.75-1.75h10.5c.957 0 1.75.793 1.75 1.75v8.75c0 .984-.793 1.75-1.75 1.75H1.75c-.984 0-1.75-.766-1.75-1.75zm8.832 2.926A.62.62 0 0 0 8.312 9a.63.63 0 0 0-.546.3l-2.38 3.5-.738-.929a.67.67 0 0 0-.492-.246c-.218 0-.41.11-.52.246l-1.75 2.188a.68.68 0 0 0-.081.71.65.65 0 0 0 .601.356h9.188c.219 0 .465-.11.574-.328a.68.68 0 0 0-.055-.684zM3.062 9c.465 0 .876-.246 1.122-.656.246-.383.246-.903 0-1.313-.247-.383-.657-.656-1.122-.656-.492 0-.902.273-1.148.656-.246.41-.246.93 0 1.313.246.41.656.656 1.149.656' />
    </g>
    <defs>
      <clipPath id='b6f82609550b7e53232740d847477191__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageSmFillIcon);
export default ForwardRef;
