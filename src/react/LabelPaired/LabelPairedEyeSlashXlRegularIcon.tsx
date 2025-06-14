import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeSlashXlRegularIcon = (
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
      <path d='m1.172 6.188 28.547 22.5c.281.234.375.75.093 1.03-.234.329-.703.423-1.03.141L.281 7.36c-.329-.234-.423-.75-.141-1.03.234-.329.75-.423 1.03-.141m27.187 12.421c-.468 1.125-1.312 2.672-2.53 4.172l-1.173-.937A17.2 17.2 0 0 0 27 18c-.656-1.5-2.016-3.75-4.031-5.625C20.953 10.5 18.28 9 15 9c-1.875 0-3.562.516-5.016 1.266L8.72 9.234C10.5 8.204 12.563 7.5 15 7.5c3.75 0 6.797 1.734 9 3.797 2.203 2.015 3.656 4.453 4.36 6.14.14.375.14.797 0 1.172M4.125 13.266l1.172.937A15.1 15.1 0 0 0 3 18c.61 1.5 1.969 3.75 3.984 5.625C9 25.5 11.672 27 15 27c1.828 0 3.516-.469 4.969-1.219l1.265 1.032C19.5 27.843 17.391 28.5 15 28.5c-3.797 0-6.844-1.687-9.047-3.75s-3.656-4.5-4.36-6.14a1.68 1.68 0 0 1 0-1.172c.47-1.125 1.313-2.672 2.532-4.172M15 24c-3.328 0-6-2.672-6-6 0-.281 0-.562.047-.844l1.453 1.125c.14 2.39 2.11 4.219 4.5 4.219.234 0 .516 0 .75-.047l1.453 1.125A5.9 5.9 0 0 1 15 24m6-6v.047c0 .281-.047.562-.094.844l-1.453-1.125c-.14-2.391-2.062-4.22-4.453-4.22-.281 0-.562 0-.797.048l-1.453-1.125C13.453 12.188 14.203 12 15 12c3.281 0 6 2.719 6 6' />
    </g>
    <defs>
      <clipPath id='9c0df412bae6de1947e9c8ddea327403__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSlashXlRegularIcon);
export default ForwardRef;
