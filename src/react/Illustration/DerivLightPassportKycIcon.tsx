import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightPassportKycIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 64 64'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#84ABAE'
      d='M49.985 7.475h-35.97a3.765 3.765 0 0 0-3.765 3.747v47.487a3.765 3.765 0 0 0 3.765 3.766h35.97a3.765 3.765 0 0 0 3.765-3.765V11.24a3.765 3.765 0 0 0-3.765-3.765'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M49.985 8.475h-35.97a2.765 2.765 0 0 0-2.765 2.764v47.47a2.765 2.765 0 0 0 2.765 2.766h35.97a2.765 2.765 0 0 0 2.765-2.765V11.24a2.765 2.765 0 0 0-2.765-2.765m-35.97-1h35.971q.124 0 .247.008a3.765 3.765 0 0 1 3.517 3.756v47.47a3.765 3.765 0 0 1-3.765 3.766h-35.97a3.765 3.765 0 0 1-3.765-3.765V11.222a3.765 3.765 0 0 1 3.765-3.747'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M42.75 43.475h-22a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M42.75 49.475h-22a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M23.289 26.927a8.414 8.414 0 1 1 16.827 0 8.414 8.414 0 0 1-16.827 0m4.939-4.892a10 10 0 0 1 .382-.93 6.7 6.7 0 0 1 .808-1.314 7.5 7.5 0 0 0-3.388 2.244zm-.766 4.431c.034-1.26.203-2.451.482-3.508H25.35a7.45 7.45 0 0 0-1.123 3.508zm1.44-3.508h2.34v3.508h-2.856c.036-1.287.222-2.481.516-3.508m.31-.923a8 8 0 0 1 .231-.533c.534-1.121 1.173-1.772 1.799-1.987v2.52zm2.95 0h2.03a8 8 0 0 0-.23-.533c-.534-1.122-1.174-1.774-1.801-1.987zm2.341.923h-2.341v3.508h2.857c-.036-1.287-.221-2.481-.516-3.508m1.44 3.508a15.5 15.5 0 0 0-.482-3.508h2.595a7.45 7.45 0 0 1 1.123 3.508zm-.766-4.431a10 10 0 0 0-.382-.93 6.7 6.7 0 0 0-.807-1.314 7.5 7.5 0 0 1 3.387 2.244zm.37 8.515c.228-.968.366-2.037.396-3.16l3.236-.002a7.45 7.45 0 0 1-.919 3.162zm-.528-3.16h-2.856v3.16h2.434c.24-.945.39-2.016.422-3.16m-6.633 0h2.856v3.16h-2.434c-.24-.945-.39-2.016-.422-3.16m-.528 3.16a15.7 15.7 0 0 1-.395-3.16h-3.237a7.45 7.45 0 0 0 .919 3.16zm.752 2.198q-.28-.587-.498-1.275h-2.363a7.5 7.5 0 0 0 3.669 2.59 6.7 6.7 0 0 1-.808-1.315m2.632-1.275h-2.157q.164.47.358.879c.534 1.12 1.172 1.772 1.798 1.986zm3.079 0q-.165.47-.359.879c-.534 1.12-1.172 1.772-1.798 1.986v-2.865zm.474 1.275q.28-.587.498-1.275h2.363a7.5 7.5 0 0 1-3.668 2.59 6.7 6.7 0 0 0 .807-1.315'
      clipRule='evenodd'
    />
    <path
      fill='#E0F0F0'
      d='M45.972 2.571h-.001L18.866 7.476h30.32l.002-2.68a2.765 2.765 0 0 0-3.216-2.224'
    />
    <path
      fill='#fff'
      d='M45.793 1.588 14.015 7.475h4.851l27.105-4.903h.001a2.765 2.765 0 0 1 3.216 2.223l-.002 2.68h.8q.124 0 .247.008V5.29a3.765 3.765 0 0 0-4.44-3.703'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivLightPassportKycIcon);
export default ForwardRef;
