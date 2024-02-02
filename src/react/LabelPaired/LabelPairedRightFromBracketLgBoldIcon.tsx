import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightFromBracketLgBoldIcon = (
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
      <path d='M13.75 11.203v2.11q-.079.858-.937.937H8.125v2.5h4.688q.858.078.937.938v2.109l4.297-4.297zM20 15.5q0 .703-.508 1.21l-4.531 4.493q-.508.547-1.29.547-.74 0-1.25-.547a1.84 1.84 0 0 1-.546-1.25v-1.328h-3.75a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328v-2.5q.039-.78.547-1.328.546-.508 1.328-.547h3.75v-1.328q.039-.743.547-1.25.507-.508 1.25-.547.78 0 1.289.547l4.531 4.492Q20 14.797 20 15.5M6.563 8.625H3.438q-.665 0-1.094.469a1.42 1.42 0 0 0-.469 1.094v10.625q0 .663.469 1.093.428.47 1.094.469h3.125q.859.078.937.938-.078.858-.937.937H3.438q-1.446-.04-2.422-1.016Q.039 22.26 0 20.812V10.188q.04-1.444 1.016-2.421.975-.977 2.422-1.016h3.125q.859.078.937.938-.078.858-.937.937' />
    </g>
    <defs>
      <clipPath id='270fdb6d8acb671087f075bdf94ca9a1__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketLgBoldIcon);
export default ForwardRef;
