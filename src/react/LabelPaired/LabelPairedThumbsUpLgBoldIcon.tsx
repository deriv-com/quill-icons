import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsUpLgBoldIcon = (
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
      <path d='M12.656 6.867q1.133.352 1.68 1.328t.234 2.149l-.195.781q-.196.625-.469 1.25H17.5q1.055.039 1.758.742T20 14.875q-.039 1.055-.742 1.758.117.351.117.742-.04 1.25-.977 1.992.04.235.04.508-.04 1.25-.938 1.953-.039 1.054-.742 1.719-.704.664-1.758.703h-3.79a4.4 4.4 0 0 1-2.46-.742l-2.383-1.602q-.703-.546-.273-1.289.546-.665 1.289-.273l2.422 1.601q.624.43 1.406.43H15q.585-.039.625-.625a.35.35 0 0 0-.04-.156q-.155-.782.587-1.133.351-.156.39-.586a.63.63 0 0 0-.117-.39q-.312-.43-.156-.9a.95.95 0 0 1 .703-.585q.47-.117.508-.625 0-.235-.156-.43a.85.85 0 0 1-.196-.82.94.94 0 0 1 .586-.664q.352-.156.391-.586-.039-.585-.625-.625h-5.234q-.547 0-.82-.508a.94.94 0 0 1 .077-.976 6.5 6.5 0 0 0 1.016-2.149l.234-.781q.157-.86-.625-1.172-.858-.156-1.171.625l-.235.781A5.6 5.6 0 0 1 9.57 12.22l-1.992 2.187q-.626.586-1.328.078-.586-.663-.078-1.328l2.031-2.226a3.7 3.7 0 0 0 .742-1.367l.235-.782q.351-1.133 1.328-1.68.976-.546 2.148-.234M1.25 13h2.5q.547 0 .898.352.352.35.352.898V23q0 .547-.352.898-.35.352-.898.352h-2.5q-.547 0-.898-.352Q0 23.548 0 23v-8.75q0-.547.352-.898Q.702 13 1.25 13' />
    </g>
    <defs>
      <clipPath id='b704495a5ebd3109__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsUpLgBoldIcon);
export default ForwardRef;
