import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThreeLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 7.688c0-.508.39-.938.938-.938h10c.351 0 .703.234.859.625.156.352.039.742-.235 1.016l-5.82 5.547h1.602c2.812 0 5.156 2.343 5.156 5.156 0 2.851-2.344 5.156-5.156 5.156H4.039c-1.523 0-2.93-.86-3.633-2.227l-.078-.156a.925.925 0 0 1 .43-1.25.925.925 0 0 1 1.25.43l.078.117c.352.742 1.133 1.211 1.953 1.211h3.555a3.276 3.276 0 0 0 3.281-3.281 3.3 3.3 0 0 0-3.281-3.282H3.687a.99.99 0 0 1-.898-.585.98.98 0 0 1 .234-1.016l5.82-5.586H1.189c-.547 0-.938-.39-.938-.937' />
    </g>
    <defs>
      <clipPath id='0ce73d1a3af575dcb0a9d24d9eda9757__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeLgBoldIcon);
export default ForwardRef;
