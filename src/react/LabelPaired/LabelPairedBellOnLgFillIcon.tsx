import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellOnLgFillIcon = (
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
      <path d='M12.5 5.5c.664 0 1.25.586 1.25 1.25v.781c2.852.547 5 3.086 5 6.094v.742c0 1.836.664 3.633 1.875 5l.273.313c.352.39.43.898.235 1.367-.195.43-.664.703-1.133.703H5c-.508 0-.977-.273-1.172-.703a1.26 1.26 0 0 1 .235-1.367l.273-.313a7.6 7.6 0 0 0 1.914-5v-.742c0-3.008 2.148-5.547 5-6.094V6.75c0-.664.547-1.25 1.25-1.25m1.758 19.297c-.469.469-1.094.703-1.758.703s-1.328-.234-1.797-.703S10 23.664 10 23h5c0 .664-.273 1.328-.742 1.797M0 13.313c0-.508.39-.938.938-.938h3.125a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H.938c-.547 0-.938-.39-.938-.937m20.938-.938h3.125a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937h-3.125c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938m2.382-6.016a.925.925 0 0 1-.43 1.25l-2.5 1.25a.925.925 0 0 1-1.25-.43.925.925 0 0 1 .43-1.25l2.5-1.25a.925.925 0 0 1 1.25.43M2.07 7.61a.925.925 0 0 1-.43-1.25.925.925 0 0 1 1.25-.43l2.5 1.25a.925.925 0 0 1 .43 1.25.925.925 0 0 1-1.25.43z' />
    </g>
    <defs>
      <clipPath id='4b6eaf16e3aed1f5a5df5177536a16a2__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellOnLgFillIcon);
export default ForwardRef;
