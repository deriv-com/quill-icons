import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellOnXlRegularIcon = (
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
      <path d='M28.406 6.422a.77.77 0 0 1-.328 1.031l-3 1.5c-.375.188-.844 0-1.031-.328a.77.77 0 0 1 .328-1.031l3-1.5a.77.77 0 0 1 1.031.328M14.25 6.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75v.797c3.75.375 6.75 3.562 6.75 7.453v1.406c0 2.016.797 3.985 2.25 5.438l.14.14c.376.375.61.938.61 1.453a2.1 2.1 0 0 1-2.11 2.11H6.564C5.39 25.5 4.5 24.609 4.5 23.437c0-.562.188-1.078.61-1.453l.093-.14C6.656 20.39 7.5 18.422 7.5 16.359V15a7.484 7.484 0 0 1 6.75-7.453zM15 9c-3.328 0-6 2.719-6 6v1.406a9.23 9.23 0 0 1-2.719 6.516l-.14.14c-.094.094-.188.235-.188.375 0 .329.281.61.61.61H23.39a.62.62 0 0 0 .609-.61c0-.14-.094-.28-.187-.375l-.141-.14a9.23 9.23 0 0 1-2.719-6.516V15c0-3.281-2.672-6-6-6zm-1.453 18.516c.234.609.797.984 1.453.984.61 0 1.172-.375 1.406-.984.14-.375.563-.61.938-.47.375.142.61.563.468.985A2.99 2.99 0 0 1 15 30c-1.312 0-2.437-.797-2.86-1.969a.785.785 0 0 1 .47-.984c.374-.14.796.094.937.469M0 14.25c0-.375.328-.75.75-.75H4.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H.75a.74.74 0 0 1-.75-.75m25.5-.75h3.75c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H25.5a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75M1.875 7.453a.77.77 0 0 1-.328-1.031.77.77 0 0 1 1.031-.328l3 1.5a.77.77 0 0 1 .328 1.031c-.187.328-.656.516-1.031.328z' />
    </g>
    <defs>
      <clipPath id='b9919046e58a5144ec097cab807ad0f1__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellOnXlRegularIcon);
export default ForwardRef;
