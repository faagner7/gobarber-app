import React from 'react';
import { View } from 'react-native';

import Button from '../../componets/Button';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button onPress={signOut} style={{ width: '100%' }}>
        Sair
      </Button>
    </View>
  );
};

export default Dashboard;
