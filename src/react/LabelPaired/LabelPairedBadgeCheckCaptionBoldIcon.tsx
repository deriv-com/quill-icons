import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBadgeCheckCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.688 5.422q-.235.375-.657.258-.82-.236-1.476.375-.61.656-.375 1.476.117.422-.258.657-.75.42-.797 1.312.047.89.797 1.313.375.234.258.656-.236.82.375 1.476.656.61 1.476.375.422-.117.657.258.42.75 1.312.797.89-.047 1.313-.797.234-.375.656-.258.82.21 1.476-.375.61-.656.375-1.476-.117-.422.282-.656.726-.423.773-1.313-.047-.89-.773-1.312-.399-.236-.282-.657.236-.82-.375-1.476-.656-.61-1.476-.375-.422.117-.657-.258-.42-.75-1.312-.797-.89.047-1.312.797M6 3.5q1.313.046 2.063 1.008 1.218-.141 2.18.75.89.96.75 2.18.96.75 1.007 2.062-.047 1.313-1.008 2.063.141 1.218-.75 2.18-.96.89-2.18.75-.75.96-2.062 1.007-1.312-.047-2.062-1.008-1.22.141-2.18-.75-.891-.96-.75-2.18Q.048 10.813 0 9.5q.046-1.312 1.008-2.062-.141-1.22.75-2.18.96-.891 2.18-.75Q4.688 3.548 6 3.5m2.648 4.898-3 3q-.397.33-.796 0l-1.5-1.5q-.33-.397 0-.796.397-.33.796 0l1.102 1.101 2.602-2.601q.397-.33.796 0 .33.397 0 .796' />
    </g>
    <defs>
      <clipPath id='457cbd694f00402c__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckCaptionBoldIcon);
export default ForwardRef;
