import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsLgBoldIcon = (
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
      <path d='M10 5.5a.95.95 0 0 1 .938.938v1.64c3.359.43 6.054 3.125 6.484 6.485h1.64A.95.95 0 0 1 20 15.5c0 .547-.43.938-.937.938h-1.641c-.43 3.398-3.125 6.093-6.485 6.523v1.602c0 .546-.43.937-.937.937-.547 0-.937-.39-.937-.937V22.96a7.545 7.545 0 0 1-6.524-6.523H.937c-.546 0-.937-.391-.937-.938 0-.508.39-.937.938-.937h1.601c.43-3.36 3.125-6.055 6.524-6.485v-1.64c0-.508.39-.938.937-.938m-5.625 10a5.6 5.6 0 0 0 2.813 4.883c1.718 1.015 3.867 1.015 5.625 0 1.718-1.016 2.812-2.852 2.812-4.883 0-1.992-1.094-3.828-2.812-4.844-1.758-1.015-3.907-1.015-5.626 0A5.58 5.58 0 0 0 4.376 15.5m7.5 0c0-.664-.39-1.25-.937-1.602-.586-.351-1.329-.351-1.876 0-.585.352-.937.938-.937 1.602 0 .703.352 1.29.938 1.64.546.352 1.289.352 1.874 0 .547-.35.938-.937.938-1.64m-5.625 0c0-1.328.703-2.54 1.875-3.242 1.133-.664 2.578-.664 3.75 0 1.133.703 1.875 1.914 1.875 3.242 0 1.367-.742 2.578-1.875 3.281-1.172.664-2.617.664-3.75 0-1.172-.703-1.875-1.914-1.875-3.281' />
    </g>
    <defs>
      <clipPath id='19da6ad6d402b272cf7aa96278667f0c__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsLgBoldIcon);
export default ForwardRef;
