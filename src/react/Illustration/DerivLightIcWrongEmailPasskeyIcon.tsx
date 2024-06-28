import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightIcWrongEmailPasskeyIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#ac3ad8fbce346af53ac6b84dc41e0851__a)'>
      <path
        fill='url(#ac3ad8fbce346af53ac6b84dc41e0851__b)'
        fillRule='evenodd'
        d='M15.372 1.225a145 145 0 0 0-1.826 1.729h4.908a145 145 0 0 0-1.823-1.726.94.94 0 0 0-1.259-.003M12.32 3.938h15.55l.069-.004a.5.5 0 0 1 .373.096.5.5 0 0 1 .188.304v3.928c0 .218-.145.41-.358.472L19 11.41v-.578a.99.99 0 0 0-1-.985h-4c-.552 0-1 .44-1 .985v.548c-4.263-1.284-7.658-2.287-9.138-2.687a.49.49 0 0 1-.362-.469V4.334a.5.5 0 0 1 .188-.304.5.5 0 0 1 .373-.096l.069.004zM19 13.784v-1.348l9.427-2.758.073-.023v6.555l-7.721 4.025A249 249 0 0 0 18 18.168v-3.399c.552 0 1-.44 1-.985m-2 3.691V14.77h-2v2.704a2.18 2.18 0 0 1 2 .002m-3 .693V14.77c-.552 0-1-.44-1-.985v-1.376c-4.388-1.321-7.902-2.361-9.405-2.767L3.5 9.61v6.599l7.721 4.025c1.123-.845 2.058-1.54 2.779-2.067M2.5 15.754v-2.225L1 14.976v13.06a1710 1710 0 0 1 6.743-5.166l.154-.117q1.323-1.007 2.45-1.86l-8.08-4.212a.49.49 0 0 1-.209-.665.5.5 0 0 1 .442-.262M0 29.05V14.77c0-.128.05-.256.15-.352L2.5 12.15V4.298l.004-.062c.05-.392.258-.747.576-.987a1.52 1.52 0 0 1 1.081-.295h7.955A179 179 0 0 1 14.69.504a1.953 1.953 0 0 1 2.621.004c.615.568 1.497 1.407 2.572 2.446h7.955c.385-.043.772.062 1.08.294.32.24.527.596.577.988l.004.062v7.852l2.35 2.268c.1.096.15.224.15.352v15.157c-.027.892-.744 1.607-1.605 1.58H1.62C.744 31.534.027 30.82 0 29.912zm31 .235v.626c-.01.349-.283.62-.59.611H1.605c-.322.01-.594-.262-.605-.626v-.611l.453-.35a1762 1762 0 0 1 6.902-5.287l.153-.117c3.278-2.495 5.694-4.305 6.879-5.143a1.16 1.16 0 0 1 1.244.012c1.167.826 3.583 2.636 6.86 5.13l.154.118a1575 1575 0 0 1 6.902 5.288zm0-1.25v-13.06l-1.5-1.447v2.225c.18 0 .352.095.442.262.13.24.036.538-.208.665l-8.082 4.213c.75.566 1.57 1.188 2.451 1.859l.154.117A1543 1543 0 0 1 31 28.036M18 13.784h-4v-2.953h4z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <linearGradient
        id='ac3ad8fbce346af53ac6b84dc41e0851__b'
        x1={16}
        x2={47.504}
        y1={47.262}
        y2={15.266}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF444F' />
        <stop offset={1} stopColor='#FF6444' />
      </linearGradient>
      <clipPath id='ac3ad8fbce346af53ac6b84dc41e0851__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightIcWrongEmailPasskeyIcon);
export default ForwardRef;
