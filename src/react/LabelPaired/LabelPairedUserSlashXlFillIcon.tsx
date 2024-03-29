import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserSlashXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.781 6.281 9 11.906A5.99 5.99 0 0 1 15 6c3.281 0 6 2.719 6 6 0 2.813-1.922 5.11-4.453 5.813L29.53 28.03c.516.375.61 1.078.188 1.547-.375.516-1.078.61-1.547.188L.422 8.016c-.516-.375-.61-1.078-.188-1.547.375-.516 1.079-.61 1.547-.188m10.594 14.016 12.234 9.61c-.187.093-.328.093-.515.093H5.859c-.75 0-1.359-.61-1.359-1.36 0-4.453 3.469-8.109 7.875-8.343' />
    </g>
    <defs>
      <clipPath id='b051f4eb89bb73e4df91a1cc237096bc__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSlashXlFillIcon);
export default ForwardRef;
