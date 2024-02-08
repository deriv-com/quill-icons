import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSunBrightMdBoldIcon = (
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
      <path d='M8.75 4.75v2q-.063.687-.75.75-.687-.063-.75-.75v-2Q7.313 4.063 8 4q.687.063.75.75m4.906 2.656L12.25 8.813q-.531.437-1.062 0-.438-.532 0-1.063l1.406-1.406q.531-.438 1.062 0 .438.531 0 1.062M3.406 6.344 4.812 7.75q.438.53 0 1.063-.531.437-1.062 0L2.344 7.406q-.438-.531 0-1.062.531-.438 1.062 0M.75 11.25h2q.687.063.75.75-.063.687-.75.75h-2Q.063 12.687 0 12q.063-.687.75-.75m12.5 0h2q.687.063.75.75-.063.687-.75.75h-2q-.687-.063-.75-.75.063-.687.75-.75m-8.437 5-1.407 1.406q-.531.438-1.062 0-.438-.531 0-1.062l1.406-1.407q.53-.437 1.063 0 .437.532 0 1.063m7.437-1.062 1.406 1.406q.438.531 0 1.062-.531.438-1.062 0l-1.406-1.406q-.438-.531 0-1.062.531-.438 1.062 0m-3.5 2.062v2q-.063.687-.75.75-.687-.063-.75-.75v-2q.063-.687.75-.75.687.063.75.75M10 12q-.03-1.125-1-1.719-1-.562-2 0-.97.594-1 1.719.03 1.125 1 1.719 1 .562 2 0 .97-.594 1-1.719m-5.5 0q0-.937.469-1.75T6.25 8.969A3.44 3.44 0 0 1 8 8.5q.937 0 1.75.469t1.281 1.281q.47.813.469 1.75 0 .937-.469 1.75T9.75 15.031A3.44 3.44 0 0 1 8 15.5a3.44 3.44 0 0 1-1.75-.469 3.44 3.44 0 0 1-1.281-1.281A3.44 3.44 0 0 1 4.5 12' />
    </g>
    <defs>
      <clipPath id='429f1b2f7e531d34d967dc42aec3c788__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSunBrightMdBoldIcon);
export default ForwardRef;
