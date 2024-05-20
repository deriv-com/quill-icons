import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkSimpleLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 15.5A6.243 6.243 0 0 1 6.5 9.25h2.813a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H6.5c-2.422 0-4.375 1.992-4.375 4.375A4.37 4.37 0 0 0 6.5 19.875h2.813a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H6.5A6.22 6.22 0 0 1 .25 15.5m22.5 0a6.243 6.243 0 0 1-6.25 6.25h-2.812c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938H16.5c2.383 0 4.375-1.953 4.375-4.375 0-2.383-1.992-4.375-4.375-4.375h-2.812c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938H16.5c3.438 0 6.25 2.813 6.25 6.25m-15.312-.937h8.125a.95.95 0 0 1 .937.937c0 .547-.43.938-.937.938H7.437c-.546 0-.937-.391-.937-.938 0-.508.39-.937.938-.937' />
    </g>
    <defs>
      <clipPath id='d4b771a8314fff0b91e1f38ab1c70c6d__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleLgBoldIcon);
export default ForwardRef;
