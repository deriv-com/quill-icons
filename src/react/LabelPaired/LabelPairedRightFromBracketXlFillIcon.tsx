import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightFromBracketXlFillIcon = (
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
      <path d='m17.672 10.969 5.765 5.765c.329.328.563.797.563 1.266 0 .516-.234.984-.562 1.313l-5.766 5.765c-.281.281-.703.422-1.125.422A1.56 1.56 0 0 1 15 23.953V21H9a1.48 1.48 0 0 1-1.5-1.5v-3c0-.797.656-1.5 1.5-1.5h6v-2.906c0-.844.703-1.594 1.547-1.594.422 0 .844.188 1.125.469M7.5 10.5h-3c-.844 0-1.5.703-1.5 1.5v12c0 .844.656 1.5 1.5 1.5h3c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-3A4.5 4.5 0 0 1 0 24V12c0-2.484 2.016-4.5 4.5-4.5h3C8.297 7.5 9 8.203 9 9c0 .844-.703 1.5-1.5 1.5' />
    </g>
    <defs>
      <clipPath id='c54d7fcdd67a1f3fcc0b929bc352a936__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketXlFillIcon);
export default ForwardRef;
