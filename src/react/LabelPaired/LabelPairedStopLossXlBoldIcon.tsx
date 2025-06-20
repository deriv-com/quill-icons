import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopLossXlBoldIcon = (
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
      <path d='M10.031 24.516q-1.687 0-2.812-.563c-.797-.375-1.407-.89-1.969-1.453l1.781-1.828c.89.937 1.922 1.453 3.188 1.453.656 0 1.172-.14 1.453-.422.328-.281.515-.656.515-1.125q0-.492-.28-.844c-.188-.234-.61-.422-1.173-.468l-1.265-.188c-1.313-.187-2.297-.562-2.906-1.219-.61-.609-.938-1.453-.938-2.53 0-.563.094-1.079.328-1.548s.516-.844.938-1.172c.375-.375.89-.609 1.453-.796a6.8 6.8 0 0 1 2.015-.282c.938 0 1.782.14 2.485.469.703.281 1.36.703 1.875 1.313L12.89 15.14c-.328-.375-.657-.657-1.125-.844-.422-.235-.938-.375-1.594-.375-.61 0-1.078.14-1.36.328-.28.234-.468.516-.468.938s.14.703.375.937c.234.188.61.328 1.125.375l1.265.234c1.266.188 2.25.563 2.86 1.172.656.61.937 1.453.937 2.532 0 .609-.094 1.171-.328 1.64-.187.516-.515.938-.937 1.313a4.1 4.1 0 0 1-1.547.843c-.61.188-1.313.282-2.063.282m7.172-.235V11.72h2.719V21.89h4.781v2.39z' />
    </g>
    <defs>
      <clipPath id='be375eb6b9c47e001451bc48866c125d__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopLossXlBoldIcon);
export default ForwardRef;
