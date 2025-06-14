import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeSlashXlBoldIcon = (
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
      <path d='m1.781 6.281 5.25 4.078C9.141 8.766 11.766 7.5 15 7.5c3.75 0 6.797 1.734 9 3.797 2.203 2.015 3.656 4.453 4.36 6.14.14.375.14.797 0 1.172-.61 1.5-1.876 3.657-3.75 5.532l4.921 3.89c.516.375.61 1.078.188 1.547-.375.516-1.078.61-1.547.188L.422 8.016c-.516-.375-.61-1.078-.188-1.547.375-.516 1.079-.61 1.547-.188m7.078 5.532 2.157 1.687A6 6 0 0 1 15 12c3.281 0 6 2.719 6 6 0 1.031-.234 1.969-.703 2.766l2.531 1.968c1.64-1.593 2.766-3.422 3.328-4.734-.61-1.406-1.875-3.375-3.703-5.062C20.531 11.156 18.047 9.75 15 9.75c-2.39 0-4.406.844-6.14 2.063m9.61 7.546c.187-.422.281-.89.281-1.359A3.76 3.76 0 0 0 15 14.25h-.094c.047.281.094.516.094.75 0 .516-.14.938-.328 1.36zM20.906 27A12.3 12.3 0 0 1 15 28.5c-3.797 0-6.844-1.687-9.047-3.75s-3.656-4.5-4.36-6.14a1.68 1.68 0 0 1 0-1.172c.47-1.079 1.22-2.438 2.298-3.844L5.625 15a14.7 14.7 0 0 0-1.828 3c.656 1.406 1.875 3.422 3.703 5.11 1.922 1.78 4.406 3.14 7.5 3.14 1.406 0 2.719-.281 3.938-.797zm-4.125-3.234a7.5 7.5 0 0 1-1.828.234c-3.281 0-6-2.672-6-6 0-.094.047-.234.047-.375l2.625 2.063a3.63 3.63 0 0 0 2.531 1.968z' />
    </g>
    <defs>
      <clipPath id='f24d29c08f9a3ba2238f5d0d5828f618__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSlashXlBoldIcon);
export default ForwardRef;
