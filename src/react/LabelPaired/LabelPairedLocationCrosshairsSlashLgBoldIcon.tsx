import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSlashLgBoldIcon = (
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
      <path d='m1.484 5.734 5.704 4.454c1.171-1.133 2.656-1.915 4.375-2.11v-1.64c0-.508.39-.938.937-.938a.95.95 0 0 1 .938.938v1.64c3.359.43 6.054 3.125 6.484 6.485h1.64a.95.95 0 0 1 .938.937c0 .547-.43.938-.937.938h-1.641a6.9 6.9 0 0 1-1.016 2.93l5.703 4.491c.43.313.508.899.157 1.29-.313.43-.899.507-1.29.156L.353 7.18c-.43-.313-.508-.899-.157-1.29.313-.43.899-.507 1.29-.156m7.227 5.625 1.484 1.172a3.9 3.9 0 0 1 2.305-.781c2.07 0 3.75 1.68 3.75 3.75 0 .547-.117 1.055-.312 1.523l1.484 1.172c.43-.78.703-1.718.703-2.695 0-3.086-2.54-5.625-5.625-5.625a5.6 5.6 0 0 0-3.79 1.484m5.625 4.414V15.5c0-1.016-.82-1.875-1.875-1.875-.234 0-.469.078-.664.156zm.234 4.961 1.602 1.29c-.82.507-1.758.82-2.735.937v1.602c0 .546-.43.937-.937.937-.547 0-.937-.39-.937-.937V22.96c-3.399-.43-6.094-3.125-6.524-6.484H3.438a.925.925 0 0 1-.938-.938c0-.547.39-.937.938-.937h1.601c.04-.43.117-.782.234-1.172l1.641 1.289c-.039.273-.039.547-.039.781 0 3.125 2.5 5.625 5.625 5.625.703 0 1.406-.117 2.07-.39' />
    </g>
    <defs>
      <clipPath id='2bbde7acacee57c11faab54d9452983b__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSlashLgBoldIcon);
export default ForwardRef;
