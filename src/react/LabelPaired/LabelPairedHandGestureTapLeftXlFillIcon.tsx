import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureTapLeftXlFillIcon = (
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
      <path d='M9.516 14.953c.609-.281 1.312 0 1.593.563l1.875 3.937c.094-.328.329-.562.657-.75a1.45 1.45 0 0 1 1.828.61c.14-.329.375-.61.703-.75a1.333 1.333 0 0 1 1.781.609c.14-.328.375-.61.75-.797.656-.328 1.547 0 1.875.703l1.172 2.531c.89 1.875.094 4.125-1.781 4.97l-3.14 1.5c-.985.468-2.11.608-3.142.327l-.187-.047a3.68 3.68 0 0 1-2.484-2.062l-.47-.985a1.9 1.9 0 0 1 0-1.593l.282-.657c.047-.046.094-.14.14-.187l.657 1.453c.14.235.422.328.656.235.188-.094.328-.375.188-.61L8.953 16.5a1.143 1.143 0 0 1 .563-1.547m3 1.969c.234-.422.375-.938.375-1.453 0-1.64-1.36-3-3-3-1.641 0-3 1.36-3 3 0 1.36.89 2.531 2.156 2.906l-.703-1.453a1.94 1.94 0 0 1 .89-2.531c.938-.422 2.063 0 2.532.89zM5.39 7.5c.468 0 .89.422.89.938v19.171a.89.89 0 0 1-.89.891.86.86 0 0 1-.891-.89V8.437c0-.516.375-.938.89-.938' />
    </g>
    <defs>
      <clipPath id='333855f60bd14bb1317bf33c870a3d15__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureTapLeftXlFillIcon);
export default ForwardRef;
