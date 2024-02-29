import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookmarkLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 7.375q.039-.781.547-1.328.546-.508 1.328-.547h11.25q.78.039 1.328.547.508.546.547 1.328v17.266q-.077.78-.86.859a.73.73 0 0 1-.468-.156L7.5 21.242l-6.172 4.102a.73.73 0 0 1-.469.156q-.78-.078-.859-.86zm1.875-.625q-.585.039-.625.625v16.523l5.898-3.906a.59.59 0 0 1 .704 0l5.898 3.906V7.375q-.039-.585-.625-.625z' />
    </g>
    <defs>
      <clipPath id='149f4995a2b7ff9297b0fdf71158b077__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkLgRegularIcon);
export default ForwardRef;
