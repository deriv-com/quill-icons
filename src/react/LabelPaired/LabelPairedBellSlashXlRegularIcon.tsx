import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellSlashXlRegularIcon = (
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
      <path d='M17.719 24v.047l1.922 1.5H6.563a2.1 2.1 0 0 1-2.11-2.11c0-.515.234-1.078.61-1.453l.14-.14C6.656 20.39 7.5 18.422 7.5 16.406v-.468l1.453 1.124a9.56 9.56 0 0 1-2.672 5.86l-.14.094a.76.76 0 0 0-.141.422c0 .328.234.562.563.562zM14.25 7.547V6.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75v.797c3.75.375 6.75 3.562 6.75 7.453v1.406c0 2.016.797 3.985 2.25 5.438l.14.14c0 .047.047.047.094.094l-3.515-2.765A8.8 8.8 0 0 1 21 16.406V15c0-3.281-2.719-6-6-6a5.98 5.98 0 0 0-4.312 1.828l-1.172-.937a7.4 7.4 0 0 1 4.734-2.344m-.703 19.969c.234.609.797.984 1.453.984.61 0 1.172-.375 1.406-.984.14-.375.563-.61.938-.47.422.142.61.563.468.985A2.99 2.99 0 0 1 15 30c-1.312 0-2.437-.797-2.86-1.969a.785.785 0 0 1 .47-.984c.374-.14.796.094.937.469M1.172 6.188l28.547 22.5c.281.234.375.75.093 1.03-.234.329-.703.423-1.03.141L.281 7.36c-.329-.234-.423-.75-.141-1.03.234-.329.75-.423 1.03-.141' />
    </g>
    <defs>
      <clipPath id='798d9995f673494c9668f211207977f3__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSlashXlRegularIcon);
export default ForwardRef;
