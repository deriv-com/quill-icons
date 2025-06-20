import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureSwipeLeftRightLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.5 9.523c.547 0 .977.43.977.977v3.633a1.1 1.1 0 0 1 .78-.313 1.16 1.16 0 0 1 1.173 1.094 1.1 1.1 0 0 1 .78-.312 1.16 1.16 0 0 1 1.173 1.093 1.1 1.1 0 0 1 .781-.312c.625 0 1.172.547 1.172 1.172v2.343a3.134 3.134 0 0 1-3.125 3.125h-2.89a3.93 3.93 0 0 1-2.5-.898l-.118-.117c-.742-.586-1.133-1.485-1.133-2.422v-.898c0-.47.196-.899.586-1.211l.469-.391c.04-.04.078-.078.156-.078v1.328c0 .234.156.39.39.39.196 0 .392-.156.392-.39V10.5c0-.547.39-.977.976-.977zm6.484 3.868 2.11-2.11c.234-.234.234-.586 0-.781l-2.227-2.266a.65.65 0 0 0-.82 0 .65.65 0 0 0 0 .82l1.289 1.25h-3.79c-.312 0-.546.274-.546.587s.234.547.547.547h3.789l-1.133 1.132a.567.567 0 0 0 0 .82c.235.196.586.196.781 0m-13.007 0-2.07-2.11c-.235-.234-.235-.586 0-.781l2.226-2.266c.234-.195.586-.195.781 0a.566.566 0 0 1 0 .82l-1.25 1.25h3.79c.312 0 .546.274.546.587a.534.534 0 0 1-.547.547H5.664l1.133 1.132a.65.65 0 0 1 0 .82.65.65 0 0 1-.82 0' />
    </g>
    <defs>
      <clipPath id='e275640e2a73f1686ddf818079cf88b0__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureSwipeLeftRightLgFillIcon);
export default ForwardRef;
