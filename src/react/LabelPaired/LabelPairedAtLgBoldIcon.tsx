import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAtLgBoldIcon = (
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
      <path d='M10 7.375q-3.438.078-5.742 2.383-2.304 2.304-2.383 5.742.078 3.438 2.383 5.742Q6.562 23.547 10 23.625q.859.078.938.938-.079.858-.938.937-2.812-.04-5.04-1.367a9.9 9.9 0 0 1-3.593-3.594Q.04 18.313 0 15.5q.04-2.812 1.367-5.04a9.9 9.9 0 0 1 3.594-3.593Q7.187 5.54 10 5.5q2.813.04 5.04 1.367a9.9 9.9 0 0 1 3.593 3.594Q19.96 12.687 20 15.5v1.094q-.04 1.523-1.055 2.539t-2.539 1.055q-1.914-.079-2.93-1.524Q12.11 20.11 10 20.187q-1.992-.039-3.32-1.367T5.313 15.5q.038-1.992 1.367-3.32T10 10.813q1.719.038 2.969 1.054.273-.39.781-.43.859.079.938.938v4.219q0 .742.507 1.21.469.51 1.211.509.743 0 1.211-.508.508-.469.508-1.211V15.5q-.078-3.438-2.383-5.742Q13.438 7.454 10 7.375m2.813 8.125q-.04-1.602-1.407-2.422-1.406-.78-2.812 0-1.368.82-1.406 2.422.038 1.602 1.406 2.422 1.406.78 2.812 0 1.368-.82 1.406-2.422' />
    </g>
    <defs>
      <clipPath id='4f42979b8d3a3094c3e359740418ff75__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAtLgBoldIcon);
export default ForwardRef;
